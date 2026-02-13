'use client';

import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  pressed: boolean;
  onPressedChange: (pressed: boolean) => void;
  label?: string;
}

export function Toggle({
  pressed,
  onPressedChange,
  label,
  className,
  ...props
}: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={pressed}
      aria-label={label}
      onClick={() => onPressedChange(!pressed)}
      className={cn(
        'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-500',
        pressed ? 'bg-neutral-900' : 'bg-neutral-200',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
          pressed ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  );
}
