import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const target = `  const renderView = () => {
    if (view === "login") {
      return <LoginForm onSuccess={handleLogin} />;
    }
    if (view === "admin" && user?.role === "admin") {
      return <AdminPanel adminUser={user} onBack={() => setView("dashboard")} onUserUpdate={(updatedUser) => setUser(updatedUser)} />;
    }
    if (view === "detail" && selectedComponent) {
      return (
        <ComponentDetail
          component={selectedComponent}
          onBack={() => setView("dashboard")}
        />
      );
    }
    if (view === "dashboard" && user) {
      return (
        <Dashboard
          user={user}
          onSelectComponent={navigateToComponent}
          onAdminClick={() => setView("admin")}
          onLogout={handleLogout}
          onUserUpdate={(updatedUser) => setUser(updatedUser)}
        />
      );
    }
    return null;
  };`;

const replacement = `  const renderView = () => {
    if (view === "login") {
      return <LoginForm onSuccess={handleLogin} />;
    }
    if (view === "admin" && user?.role === "admin") {
      return <AdminPanel adminUser={user} onBack={() => setView("dashboard")} onUserUpdate={(updatedUser) => setUser(updatedUser)} />;
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
        {view === "detail" && selectedComponent && (
          <ComponentDetail
            component={selectedComponent}
            onBack={() => setView("dashboard")}
          />
        )}
      </>
    );
  };`;

content = content.replace(target, replacement);
fs.writeFileSync('src/App.tsx', content);
