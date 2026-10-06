'use client';

import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const auth = localStorage.getItem('khmer_wedding_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded password for commercial demo (can be moved to env vars later)
    if (password === 'admin123') {
      localStorage.setItem('khmer_wedding_admin_auth', 'true');
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!mounted) return null; // Avoid hydration mismatch

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-4 font-khmer-kantumruuy'>
        <div className='w-full max-w-md bg-white p-8 rounded-3xl border border-[#D4AF37]/30 shadow-2xl'>
          <div className='w-16 h-16 bg-[#FFF9EF] rounded-full flex items-center justify-center mx-auto mb-6 border border-[#D4AF37]/50'>
            <Lock className='w-8 h-8 text-[#7A1624]' />
          </div>

          <h1 className='text-2xl font-bold text-center text-[#7A1624] mb-2 font-khmer-moul'>
            ចូលប្រព័ន្ធគ្រប់គ្រង
          </h1>
          <p className='text-center text-gray-500 mb-8 text-sm'>
            Please enter the admin password to access the portal.
          </p>

          <form onSubmit={handleLogin} className='space-y-6'>
            <div>
              <input
                type='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                className={`w-full px-4 py-3 rounded-xl border ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-[#D4AF37] focus:ring-[#D4AF37]/20'} focus:ring-2 transition-all outline-none`}
                placeholder='Enter password...'
                autoFocus
              />
              {error && (
                <p className='text-rose-500 text-sm mt-2 text-center'>
                  លេខសម្ងាត់មិនត្រឹមត្រូវ (Incorrect password)
                </p>
              )}
            </div>

            <button
              type='submit'
              className='w-full py-3.5 bg-linear-to-r from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] font-bold rounded-xl shadow-[0_4px_15px_rgba(122,22,36,0.3)] hover:shadow-[0_8px_25px_rgba(122,22,36,0.4)] hover:-translate-y-0.5 transition-all'
            >
              ចូល (Login)
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Optional: Add a subtle logout button for the admin */}
      <div className='fixed bottom-4 left-4 z-50'>
        <button
          onClick={() => {
            localStorage.removeItem('khmer_wedding_admin_auth');
            setIsAuthenticated(false);
          }}
          className='px-3 py-1.5 bg-white/80 backdrop-blur border border-red-100 text-red-600 text-xs rounded-full hover:bg-red-50 transition-colors shadow-sm'
        >
          Logout Admin
        </button>
      </div>
      {children}
    </>
  );
}
