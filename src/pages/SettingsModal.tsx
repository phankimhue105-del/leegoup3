import React from 'react';
import { useSettings } from '../context/SettingsContext';
import { useProgress } from '../context/ProgressContext';
import { AppButton } from '../components/common/AppButton';
import { X, Volume2, Clock, RotateCcw, ShieldAlert, Globe } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { settings, updateSettings, resetSettings } = useSettings();
  const { resetProgress } = useProgress();

  if (!isOpen) return null;

  const handleResetAll = () => {
    if (window.confirm('Bạn có chắc chắn muốn đặt lại tất cả tiến độ học tập?')) {
      resetProgress();
      resetSettings();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-100 relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 font-heading font-extrabold text-xl text-slate-800">
            <span>Cài Đặt Hệ Thống (Settings)</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-5 text-sm font-bold text-slate-700">
          {/* Sound Volume Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-indigo-600" />
                Âm lượng âm thanh (Volume)
              </span>
              <span className="text-indigo-600">{Math.round(settings.soundVolume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.soundVolume}
              onChange={(e) => updateSettings({ soundVolume: parseFloat(e.target.value) })}
              className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
            />
          </div>

          {/* Voice Speed */}
          <div className="space-y-2">
            <span className="block text-slate-600">Tốc độ đọc mẫu câu (Playback Speed)</span>
            <div className="grid grid-cols-3 gap-2">
              {[0.8, 1.0, 1.2].map((speed) => (
                <button
                  key={speed}
                  onClick={() => updateSettings({ voicePlaybackSpeed: speed })}
                  className={`py-2.5 rounded-xl border-2 text-xs font-black transition-all cursor-pointer ${
                    settings.voicePlaybackSpeed === speed
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {speed === 1.0 ? 'Bình thường (1.0x)' : `${speed}x`}
                </button>
              ))}
            </div>
          </div>

          {/* Timer Toggle */}
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="space-y-0.5">
              <span className="flex items-center gap-2 font-extrabold text-slate-800">
                <Clock className="w-4 h-4 text-indigo-600" />
                Đồng hồ đếm giờ (Timer)
              </span>
              <p className="text-xs font-semibold text-slate-500">Mặc định TẮT (OFF) theo yêu cầu</p>
            </div>
            <input
              type="checkbox"
              checked={settings.timerEnabled}
              onChange={(e) => updateSettings({ timerEnabled: e.target.checked })}
              className="w-6 h-6 accent-indigo-600 cursor-pointer"
            />
          </div>

          {/* Reset progress */}
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={handleResetAll}
              className="w-full py-3 px-4 rounded-2xl bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200 font-extrabold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Đặt lại toàn bộ tiến độ học tập</span>
            </button>
          </div>
        </div>

        <div className="pt-2">
          <AppButton onClick={onClose} variant="primary" size="lg" fullWidth>
            Lưu & Đóng cài đặt
          </AppButton>
        </div>
      </div>
    </div>
  );
};
