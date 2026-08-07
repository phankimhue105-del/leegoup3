import React from 'react';
import { FolderOpen, RefreshCw } from 'lucide-react';
import { AppButton } from './AppButton';

interface EmptyStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  actionText?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'Chưa có nội dung',
  description = 'Không tìm thấy dữ liệu bài học tương ứng.',
  onRetry,
  actionText = 'Tải lại bài học',
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center bg-white rounded-3xl border border-slate-100 shadow-sm my-6">
      <div className="w-20 h-20 rounded-3xl bg-indigo-50 flex items-center justify-center text-indigo-500 mb-4">
        <FolderOpen className="w-10 h-10" />
      </div>
      <h3 className="text-xl font-extrabold font-heading text-slate-800 mb-2">{title}</h3>
      <p className="text-sm font-medium text-slate-500 max-w-sm mb-6">{description}</p>
      {onRetry && (
        <AppButton onClick={onRetry} variant="outline" size="md" icon={<RefreshCw className="w-4 h-4" />}>
          {actionText}
        </AppButton>
      )}
    </div>
  );
};
