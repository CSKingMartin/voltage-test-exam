import { useState } from 'react';

import Button from '../../blocks/button';
import Heading from '../../blocks/heading';

export const Login = (props) => {
  const {
    children,
    ...rest
  } = props;

  const [menuOpen, toggleMenu] = useState(false);

  const panelClasses = ['login__panel', menuOpen ? 'is-visible' : ''].join(' ');

  return (
    <div className="login">
      <Button onClick={() => toggleMenu(!menuOpen)} className="login__cta">Login / Sign Up</Button>
      <div className={panelClasses}>
        <div>
          <span />
          <span />
        </div>
        <form className="rhythm--large">
          <Heading element="h2">Member Login</Heading>
          <div className="login__email">
            <input className="login__input" name="login-email" type="email" />
            <label htmlFor="login-email">Email</label>
          </div>
          <div className="login__password">
            <input className="login__input" name="login-password" type="password" />
            <label htmlFor="login-password">Password</label>
          </div>
          <p><a href="#">Forgot your password?</a></p>
          <div className="login__button-row">
            <Button type="button" variant="light">Register</Button>
            <Button type="submit">Sign In</Button>
          </div>
        </form>
      </div>
      <div className="login__overlay" />
    </div>
  );
};

export default Login;
