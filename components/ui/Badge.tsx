import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export function Badge({
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
        {
          'bg-neutral-100 text-neutral-700': variant === 'default',
          'bg-green-50 text-green-700': variant === 'success',
          'bg-amber-50 text-amber-700': variant === 'warning',
          'bg-blue-50 text-blue-700': variant === 'info',
        },
        className
      )}
      {...props}
    />
  );
}
