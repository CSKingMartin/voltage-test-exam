import Button from '../../blocks/button/';
import Heading from '../../blocks/heading/';

export const Hero = (props) => {
  const {
    heading,
    content,
    cta,
    src,
    srcMobile,
    ...rest
  } = props;

  return (
    <div className="hero" {...rest}>
      <div className="hero__background" style={{ backgroundImage: src && `url(${src})` }} />
      <div className="hero__background hero__background--mobile" style={{ backgroundImage: srcMobile ? `url(${srcMobile})` : `url(${src}` }} />
      <div className="hero__content-box rhythm--large">
        <Heading>{heading}</Heading>
        <p>
          {content}
        </p>
        <Button variant="transparent">{cta}</Button>
      </div>
    </div>
  );
};

export default Hero;
