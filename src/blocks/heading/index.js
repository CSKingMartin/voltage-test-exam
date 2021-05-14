export const Heading = (props) => {
  const {
    element,
    children,
    ...rest
  } = props;

  const classStack = [
    'heading',
    element && `heading--${element}`
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
