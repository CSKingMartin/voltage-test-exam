export const Wrapper = (props) => {
  const {
    size,
    children,
    ...rest
  } = props;

  const classStack = [
    'wrapper',
    size && `wrapper--${size}`
  ].join(' ');

  return (
    <div className={classStack}>
      {children}
    </div>
  );
};

export default Wrapper;
