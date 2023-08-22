type ContainerProps = {
  children: React.ReactNode;
}

export function Container(props: ContainerProps) {
  const { children } = props;
  return (
    <div className="mx-auto max-w-7xl">
      {children}
    </div>
  );
}