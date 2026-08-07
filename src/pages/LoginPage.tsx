import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { AppButton } from '../components/common/AppButton';
import { Card } from '../components/common/Card';
import { User, Sparkles, Check, BookOpen } from 'lucide-react';

const AVATAR_OPTIONS = [
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
  'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=200&q=80',
];

export const LoginPage: React.FC = () => {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState<string>(user?.name || 'Bảo Nam');
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    user?.avatarUrl || AVATAR_OPTIONS[0]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentName.trim()) {
      login(studentName.trim(), selectedAvatar);
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-4 sm:p-8">
      <div className="max-w-md w-full space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-3xl bg-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-extrabold font-heading text-slate-800">
            Hồ Sơ Học Sinh
          </h1>
          <p className="text-sm font-semibold text-slate-500">
            Nhập tên và chọn hình đại diện yêu thích của bạn
          </p>
        </div>

        {/* Profile Form Card */}
        <Card className="space-y-6 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Name Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Tên của bạn (Student Name)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  placeholder="Ví dụ: Bảo Nam, Minh Anh..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 font-bold text-base outline-none transition-all"
                />
              </div>
            </div>

            {/* Avatar Selector */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Chọn hình đại diện (Avatar)
              </label>
              <div className="flex justify-between gap-2">
                {AVATAR_OPTIONS.map((url, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setSelectedAvatar(url)}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden border-3 transition-all cursor-pointer ${
                      selectedAvatar === url
                        ? 'border-indigo-600 scale-110 shadow-md ring-4 ring-indigo-100'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={url} alt="Avatar" className="w-full h-full object-cover" />
                    {selectedAvatar === url && (
                      <div className="absolute inset-0 bg-indigo-600/30 flex items-center justify-center text-white">
                        <Check className="w-5 h-5 stroke-[3]" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Action */}
            <AppButton
              onClick={() => {}}
              variant="primary"
              size="lg"
              fullWidth
              icon={<Sparkles className="w-5 h-5" />}
            >
              Vào lớp học ngay
            </AppButton>
          </form>
        </Card>
      </div>
    </div>
  );
};
