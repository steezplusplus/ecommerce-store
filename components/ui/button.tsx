import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...props }, ref) => {
    return (
      <button
        className={cn(
          `
          disabled:cursor-opacity-50
          w-auto
          rounded-full
          border-transparent
          bg-black
          px-4
          py-2
          font-semibold
          transition
          hover:opacity-75
          disabled:cursor-not-allowed
        `,
          className
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
