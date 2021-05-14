export const Heading = (props) => {
  const {
    className,
    element,
    children,
    ...rest
  } = props;

  const classStack = [
    'heading',
    element && `heading--${element}`,
    className && className
  ].join(' ');

  return (
    <div className={classStack} {...rest}>
      {children}
    </div>
  );
};

Heading.defaultProps = {
  element: 'h1'
};

export default Heading;
