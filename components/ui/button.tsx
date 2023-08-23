import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = 'button',
  ...props
}, ref) => {
  return (
    <button
      className={cn(
        `
          w-auto
          rounded-full
          bg-black
          border-transparent
          px-4
          py-2
          disabled:cursor-not-allowed
          disabled:cursor-opacity-50
          font-semibold
          hover:opacity-75
          transition
        `,
        className
      )}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';