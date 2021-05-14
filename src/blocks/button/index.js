export const Button = (props) => {
  const {
    variant,
    className,
    children,
    ...rest
  } = props;

  const classStack = ['button', variant && `button--${variant}`, className && className].join(' ');

  return (
    <button className={classStack} {...rest}>
      {children}
    </button>
  );
};

export default Button;
