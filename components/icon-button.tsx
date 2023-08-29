import { cn } from '@/lib/utils';

type IconButtonProps = {
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export function IconButton(props: IconButtonProps) {
  const { icon, onClick, className } = props;
  return (
    <button
      onClick={onClick}
      className={cn(
        `
          flex items-center justify-center
          rounded-full border bg-white p-2 shadow-md
          transition hover:scale-110
        `,
        className
      )}
    >
      {icon}
    </button>
  );
}
