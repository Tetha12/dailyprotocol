import { useState, useEffect } from 'react';
import { Cpu, LogIn, Loader2, AlertCircle } from 'lucide-react';

interface AuthGateProps {
  onLogin: (username: string) => Promise<boolean>;
}

export function AuthGate({ onLogin }: AuthGateProps) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [typed, setTyped] = useState('');
  
  const msg = 'FRIDAY OS v24.0 — 60-Day Challenge Protocol...';
  
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(msg.slice(0, ++i));
      if (i >= msg.length) clearInterval(t);
    }, 40);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, '');
    if (!clean || clean.length < 3) {
      setError('Min 3 karakter. Huruf, angka, underscore.');
      return;
    }
    setLoading(true);
    setError('');
    
    try {
      const success = await onLogin(clean);
      if (!success) {
        setError('Gagal login. Coba lagi.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Terjadi kesalahan. Coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="grid-bg" />
      
      {/* Glow Orbs */}
      <div 
        className="orb" 
        style={{ width: 500, height: 500, background: 'rgba(99, 102, 241, 0.1)', top: -150, left: -150 }} 
      />
      <div 
        className="orb" 
        style={{ width: 350, height: 350, background: 'rgba(139, 92, 246, 0.07)', bottom: -80, right: -80 }} 
      />
      
      {/* Main Content */}
      <div className="animate-fade-in-up relative z-10 w-full max-w-md px-5">
        {/* Typing Effect */}
        <div className="mono text-indigo-400/60 text-sm mb-3 tracking-widest">
          {typed}<span className="animate-blink">▋</span>
        </div>
        
        {/* Card */}
        <div className="glass scan-effect rounded-3xl p-8 md:p-10">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="relative inline-flex mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 animate-pulse-ring">
                <Cpu className="w-7 h-7 text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tight mb-1">
              FRIDAY <span className="text-indigo-400">OS</span>
            </h1>
            <p className="mono text-xs text-slate-500 tracking-[0.2em] uppercase">
              60-Day Challenge · Local Storage · No Auth
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-red-400 text-sm flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                {error}
              </div>
            )}
            
            <div>
              <label className="text-xs font-bold text-slate-500 tracking-[0.12em] uppercase block mb-2">
                ID Kamu
              </label>
              <div className="relative">
                <span className="mono absolute left-4 top-1/2 -translate-y-1/2 text-indigo-500 text-sm font-semibold pointer-events-none">
                  &gt;_
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.replace(/[^a-zA-Z0-9_]/g, ''))}
                  className="input-glass pl-11 mono tracking-wide"
                  placeholder="nama_kamu"
                  autoComplete="off"
                  autoCapitalize="none"
                  maxLength={30}
                  required
                />
              </div>
              <p className="text-xs text-slate-600 mt-2">
                Huruf kecil, angka, underscore · min 3 karakter
              </p>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full"
              disabled={loading || username.length < 3}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Masuk...
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  Masuk ke Sistem
                </>
              )}
            </button>
          </form>
          
          {/* Footer */}
          <div className="mt-6 pt-5 border-t border-white/5 text-center">
            <p className="mono text-[11px] text-slate-600 tracking-[0.1em] uppercase">
              Data tersimpan di browser · Akses dari device ini
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
