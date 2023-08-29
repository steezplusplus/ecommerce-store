type LoadingSkeletonProps = {
  children?: React.ReactNode;
  className: string;
};

export function LoadingSkeleton(props: LoadingSkeletonProps) {
  const { children, className } = props;

  return (
    <div className={`animate-pulse rounded-md bg-neutral-200 ${className}`}>
      {children}
    </div>
  );
}
