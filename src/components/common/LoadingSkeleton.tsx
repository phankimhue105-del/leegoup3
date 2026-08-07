import React from 'react';

interface LoadingSkeletonProps {
  type?: 'card' | 'page' | 'list';
  count?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  type = 'card',
  count = 3,
}) => {
  if (type === 'page') {
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-6 animate-pulse">
        <div className="h-10 bg-slate-200 rounded-2xl w-1/3" />
        <div className="h-48 bg-slate-200 rounded-3xl w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-40 bg-slate-200 rounded-3xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="h-48 bg-slate-200 rounded-3xl animate-pulse p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="h-6 bg-slate-300 rounded-xl w-3/4" />
            <div className="h-4 bg-slate-300 rounded-xl w-1/2" />
          </div>
          <div className="h-10 bg-slate-300 rounded-2xl w-full" />
        </div>
      ))}
    </div>
  );
};
