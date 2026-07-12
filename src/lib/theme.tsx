import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeType = "light" | "dark" | "auto";

interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("motostore_theme");
    return (saved as ThemeType) || "auto";
  });
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("motostore_theme", theme);
    
    const applyTheme = () => {
      let dark = false;
      if (theme === "dark") {
        dark = true;
      } else if (theme === "auto") {
        const hour = new Date().getHours();
        dark = hour >= 18 || hour < 6;
      }
      setIsDark(dark);
      if (dark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    applyTheme();

    let interval: any;
    if (theme === "auto") {
      // Re-check every minute to automatically switch when the hour changes
      interval = setInterval(applyTheme, 60000); 
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
