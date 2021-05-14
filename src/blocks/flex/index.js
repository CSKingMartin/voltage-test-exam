export const Flex = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const classStack = ['flex', className && className].join(' ');

  return (
    <div className={classStack} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
