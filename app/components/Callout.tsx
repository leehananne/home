import React from 'react';

interface CalloutProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function Callout({ title, children, icon, className = "" }: CalloutProps) {
  return (
    <div className={`bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6 border-l-4 border-gray-300 dark:border-gray-600 ${className}`}>
      <div className="flex items-start gap-3">
        {icon && (
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
            {title}
          </h3>
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
