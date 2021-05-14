import Heading from '../../blocks/heading';
import Login from '../login';

export const GlobalHeader = (props) => {
  const {
    icon,
    children,
    ...rest
  } = props;

  return (
    <div className="global-header" {...rest}>
      <div className="global-header__content">
        <a className="global-header__logo" href="#">
          <img className="global-header__logo" src={icon} alt="Return to home"/>
        </a>
        <Heading className="global-header__text" element="h2">
          Club Voltage
        </Heading>
        <button className="global-header__hamburger">
          <span />
          <span />
          <span />
        </button>
        {/*<ul className="global-header__links">
          <li>Store</li>
          <li>About Us</li>
        </ul>*/}
      </div>
      <Login />
    </div>
  );
};

export default GlobalHeader;
