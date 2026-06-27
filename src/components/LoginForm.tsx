import React, { useState } from "react";
import { login } from "../lib/auth";
import { User } from "../types";
import { Activity, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";

interface LoginFormProps {
  onSuccess: (user: User) => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsLoggingIn(true);
    try {
      const user = await login(username, password);
      if (user) {
        if (rememberMe) {
          localStorage.setItem("motostore_remembered_user", JSON.stringify(user));
        } else {
          localStorage.removeItem("motostore_remembered_user");
        }
        onSuccess(user);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-[360px] bg-zinc-900/40 border border-white/5 rounded-[2rem] p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[3rem] -z-10" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[3rem] -z-10" />

        <div className="flex justify-center mb-8">
          <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 p-4 rounded-2xl border border-cyan-500/20 shadow-inner">
            <Activity className="w-10 h-10 text-cyan-400" />
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-white mb-2 tracking-tight">
          MotoScope Pro
        </h1>
        <p className="text-zinc-400 text-center text-xs uppercase tracking-widest font-bold mb-10">
          Acesso ao Sistema
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 pl-1">
              Usuário
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-inner"
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-zinc-500 mb-2 pl-1">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl pl-5 pr-12 py-4 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 transition-all shadow-inner"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-zinc-500 hover:text-zinc-300 focus:outline-none transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center pt-2">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-5 h-5 rounded border-white/10 bg-black/40 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0"
            />
            <label htmlFor="remember" className="ml-3 text-sm font-medium text-zinc-400">
              Manter conectado
            </label>
          </div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm text-center font-bold bg-red-500/10 py-3 rounded-xl border border-red-500/20"
            >
              Credenciais inválidas.
            </motion.p>
          )}

          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:hover:bg-cyan-500 text-black text-base font-bold py-4 px-4 rounded-2xl transition-all mt-4 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {isLoggingIn ? "Autenticando..." : "Entrar"}
          </button>
        </form>
      </motion.div>
      <div className="mt-10 text-center px-4 max-w-[360px] opacity-60 hover:opacity-100 transition-opacity">
        <p className="text-zinc-500 text-xs leading-relaxed font-mono">
          Desenvolvido por <span className="font-bold text-zinc-300">Mafran junior</span>
          <br />
          31 9 8613-8576
          <br />
          Mecânico e programador low-code
          <br />
          <span className="text-cyan-500/80 mt-2 block font-bold tracking-wider uppercase text-[10px]">
            Crie o seu app conosco
          </span>
        </p>
      </div>
    </div>
  );
}
