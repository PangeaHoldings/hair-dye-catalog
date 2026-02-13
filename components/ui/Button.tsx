import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            // Variants
            'bg-neutral-900 text-white hover:bg-neutral-800 focus-visible:ring-neutral-900':
              variant === 'primary',
            'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 focus-visible:ring-neutral-500':
              variant === 'secondary',
            'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 focus-visible:ring-neutral-500':
              variant === 'outline',
            'text-neutral-700 hover:bg-neutral-100 focus-visible:ring-neutral-500':
              variant === 'ghost',

            // Sizes
            'px-3 py-1.5 text-sm rounded-xl': size === 'sm',
            'px-4 py-2.5 text-base rounded-2xl': size === 'md',
            'px-6 py-3.5 text-lg rounded-2xl': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
