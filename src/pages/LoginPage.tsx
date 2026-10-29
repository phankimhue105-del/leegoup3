import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import {
  User,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  Loader2,
  AlertCircle,
  Info,
  BookOpen,
  Sparkles,
  Star,
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [noticeMessage, setNoticeMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setNoticeMessage('');

    const trimmedUser = username.trim();
    const trimmedPass = password.trim();

    // Friendly validation checks
    if (!trimmedUser && !trimmedPass) {
      setErrorMessage(
        'Vui lòng nhập Tên đăng nhập và Mật khẩu. (Please enter both username and password.)'
      );
      return;
    }

    if (!trimmedUser) {
      setErrorMessage(
        'Vui lòng nhập Tên đăng nhập của bạn. (Please enter your username.)'
      );
      return;
    }

    if (!trimmedPass) {
      setErrorMessage(
        'Vui lòng nhập Mật khẩu của bạn. (Please enter your password.)'
      );
      return;
    }

    // Call authentication service
    const result = await login({ username: trimmedUser, password: trimmedPass });

    if (result && result.success === true) {
      navigate('/home');
    } else {
      setPassword(''); // Bảo mật: Chỉ xóa mật khẩu, giữ nguyên tên đăng nhập đã nhập
      if (result?.isPendingSetup) {
        setNoticeMessage(result.message);
      } else {
        setErrorMessage(
          result?.message ||
            'Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng kiểm tra lại!'
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden select-none">
      {/* Decorative ambient background glowing shapes */}
      <div className="w-96 h-96 rounded-full bg-indigo-400/20 blur-3xl absolute -top-20 -left-20 pointer-events-none" />
      <div className="w-96 h-96 rounded-full bg-pink-400/20 blur-3xl absolute -bottom-20 -right-20 pointer-events-none" />

      {/* Floating playful elements */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-12 text-amber-300/40 hidden md:block pointer-events-none"
      >
        <Star className="w-12 h-12 fill-amber-300" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-12 left-10 text-pink-300/40 hidden md:block pointer-events-none"
      >
        <Sparkles className="w-14 h-14" />
      </motion.div>

      <div className="max-w-md w-full space-y-4 relative z-10">
        {/* Central Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/50 space-y-6"
        >
          {/* Card Header & Brand */}
          <div className="text-center space-y-2">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-indigo-500/30">
              <BookOpen className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="flex items-center justify-center gap-1.5 pt-1">
              <span className="bg-rose-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md uppercase tracking-wider">
                LeeGo
              </span>
              <span className="text-xs font-black text-indigo-700 uppercase tracking-wider font-heading">
                English Explorer AI
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black font-heading text-slate-800">
              Đăng Nhập Học Sinh
            </h1>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
                Tên đăng nhập{' '}
                <span className="text-slate-400 font-bold lowercase text-[11px]">
                  (Username)
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-indigo-500">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    if (errorMessage) setErrorMessage('');
                    if (noticeMessage) setNoticeMessage('');
                  }}
                  placeholder="Ví dụ: leego_nam (Enter username)"
                  disabled={isLoading}
                  autoComplete="username"
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-bold text-slate-800 text-sm outline-none transition-all placeholder:font-medium placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black text-slate-700 uppercase tracking-wider">
                Mật khẩu{' '}
                <span className="text-slate-400 font-bold lowercase text-[11px]">
                  (Password)
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-indigo-500">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (errorMessage) setErrorMessage('');
                    if (noticeMessage) setNoticeMessage('');
                  }}
                  placeholder="Nhập mật khẩu (Enter password)"
                  disabled={isLoading}
                  autoComplete="current-password"
                  className="w-full pl-11 pr-12 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-bold text-slate-800 text-sm outline-none transition-all placeholder:font-medium placeholder:text-slate-400 disabled:bg-slate-100 disabled:cursor-not-allowed"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer"
                  title={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message Box */}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-start gap-2.5"
              >
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* System Info / Pending Setup Notice Box */}
            {noticeMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold flex items-start gap-2.5"
              >
                <Info className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
                <span>{noticeMessage}</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={isLoading ? undefined : { scale: 1.015 }}
              whileTap={isLoading ? undefined : { scale: 0.985 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 text-white font-black text-base shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed border-b-4 border-indigo-900 active:border-b-0"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Đang kiểm tra... (Checking...)</span>
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  <span>Đăng Nhập / Log In</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Friendly Guidance Footer */}
          <div className="pt-2 text-center border-t border-slate-100 space-y-1">
            <p className="text-[11px] font-bold text-slate-500">
              💡 Gợi ý: Hãy nhờ thầy cô hoặc phụ huynh trợ giúp nếu bạn quên thông tin đăng nhập.
            </p>
            <p className="text-[10px] font-medium text-slate-400">
              (Tip: Ask your teacher or parents if you need help with your account.)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
