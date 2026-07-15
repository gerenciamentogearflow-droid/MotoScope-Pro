import { useState, useEffect } from "react";
import { User, ComponentData } from "./types";
import { initAuth } from "./lib/auth";
import { LoginForm } from "./components/LoginForm";
import { Dashboard } from "./components/Dashboard";
import { AdminPanel } from "./components/AdminPanel";
import { ComponentDetail } from "./components/ComponentDetail";
import { InstallPrompt } from "./components/InstallPrompt";
import { OfflineStatus } from "./components/OfflineStatus";
import { syncAudiosForOffline } from "./lib/audioPlayer";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [view, setView] = useState<"login" | "dashboard" | "admin" | "detail">("login");
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(null);
  const [syncProgress, setSyncProgress] = useState<number | null>(null);

  useEffect(() => {
    // Inicializa o banco com o usuário master caso não exista no Firestore
    const runInit = async () => {
      await initAuth();
    };
    runInit();

    // Sincroniza áudios para uso offline e limpa bancos antigos
    const cleanOldDbsAndSync = async () => {
      try {
        if ('indexedDB' in window && window.indexedDB.databases) {
          const dbs = await window.indexedDB.databases();
          for (const dbInfo of dbs) {
            if (dbInfo.name && dbInfo.name.startsWith('motoscope-audio-db-') && dbInfo.name !== 'motoscope-audio-db-v22') {
              console.log(`Deleting old database: ${dbInfo.name}`);
              window.indexedDB.deleteDatabase(dbInfo.name);
            }
          }
        }
      } catch (e) {
        console.warn('Error cleaning up old databases:', e);
      }

      syncAudiosForOffline((progress) => {
        setSyncProgress(progress);
        if (progress >= 100) {
          setTimeout(() => setSyncProgress(null), 3000);
        }
      });
    };
    cleanOldDbsAndSync();

    // Força o Service Worker a checar por atualizações imediatamente no carregamento do app
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.update().catch(err => console.warn('Failed to update SW registration:', err));
        }
      });

      // Se um novo Service Worker tomar controle, recarrega a página para carregar o novo bundle
      let refreshing = false;
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (!refreshing) {
          refreshing = true;
          window.location.reload();
        }
      });
    }

    // Verifica se há um acesso lembrado
    const remembered = localStorage.getItem("motostore_remembered_user");
    if (remembered) {
      try {
        const parsedUser = JSON.parse(remembered);
        if (parsedUser && parsedUser.username) {
          setUser(parsedUser);
          setView("dashboard");
        }
      } catch (e) {
        console.error("Erro ao carregar usuário salvo", e);
      }
    }
  }, []);

  const handleLogin = (loggedUser: User) => {
    setUser(loggedUser);
    setView("dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("motostore_remembered_user");
    setUser(null);
    setView("login");
    setSelectedComponent(null);
  };

  const navigateToComponent = (comp: ComponentData) => {
    setSelectedComponent(comp);
    setView("detail");
  };

  const renderView = () => {
    if (view === "login") {
      return <LoginForm onSuccess={handleLogin} />;
    }

    return (
      <>
        {user && (
          <div style={{ display: view === "dashboard" ? "block" : "none" }}>
            <Dashboard
              user={user}
              onSelectComponent={navigateToComponent}
              onAdminClick={() => setView("admin")}
              onLogout={handleLogout}
              onUserUpdate={(updatedUser) => setUser(updatedUser)}
            />
          </div>
        )}
        
        {view === "admin" && user?.role === "admin" && (
          <AdminPanel adminUser={user} onBack={() => setView("dashboard")} onUserUpdate={(updatedUser) => setUser(updatedUser)} />
        )}

        {view === "detail" && selectedComponent && (
          <ComponentDetail
            component={selectedComponent}
            onBack={() => setView("dashboard")}
          />
        )}
      </>
    );
  };

  return (
    <>
      {renderView()}
      <InstallPrompt />
      <OfflineStatus />
      {syncProgress !== null && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-[#1A2235]/90 backdrop-blur-sm border border-gray-200 dark:border-[#2A3B5C] shadow-lg rounded-full px-4 py-2 flex items-center gap-3">
          <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            {syncProgress < 100 
              ? `Baixando áudios para offline: ${syncProgress}%` 
              : 'Áudios baixados com sucesso!'}
          </span>
        </div>
      )}
    </>
  );
}

// Forcing a commit change 2
// Forcing a commit change 6
