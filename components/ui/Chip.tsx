'use client';

import { ButtonHTMLAttributes } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onRemove?: () => void;
  variant?: 'default' | 'filter';
}

export function Chip({
  className,
  variant = 'default',
  onRemove,
  children,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500',
        {
          'bg-neutral-100 text-neutral-700 hover:bg-neutral-200':
            variant === 'default',
          'bg-neutral-900 text-white hover:bg-neutral-800': variant === 'filter',
        },
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <X
          className="h-3.5 w-3.5 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}
    </button>
  );
}
