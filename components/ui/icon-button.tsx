import { cn } from "@/lib/utils"

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
          border rounded-full bg-white shadow-md p-2
          hover:scale-110 transition
        `, className
      )}

    >
      {icon}
    </button>
  )
}