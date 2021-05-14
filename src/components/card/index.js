import Heading from '../../blocks/heading';

export const Card = (props) => {
  const {
    icon,
    alt,
    heading,
    content,
    ...rest
  } = props;

  return (
    <div className="card rhythm" {...rest}>
      <img className="card__image" src={icon} alt={alt} width={128} height={128} />
      <Heading element="h3">{heading}</Heading>
      <p>{content}</p>
    </div>
  );
};

export default Card;
