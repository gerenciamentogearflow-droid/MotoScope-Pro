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

    // Sincroniza áudios para uso offline
    syncAudiosForOffline((progress) => {
      setSyncProgress(progress);
      if (progress >= 100) {
        setTimeout(() => setSyncProgress(null), 3000);
      }
    });

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
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/90 dark:bg-[#162032]/90 backdrop-blur-sm border border-gray-200 dark:border-[#273654] shadow-lg rounded-full px-4 py-2 flex items-center gap-3">
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
// Forcing a commit change 3
