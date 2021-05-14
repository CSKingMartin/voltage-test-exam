import Button from '../../blocks/button';
import Heading from '../../blocks/heading';
import Flex from '../../blocks/flex';

export const FlexCta = (props) => {
  const {
    heading,
    children,
    ...rest
  } = props;

  return (
    <div className="flex-cta">
      <Heading element="h2">{heading}</Heading>
      <Flex>
        {children}
      </Flex>
      <Button className="flex-cta__button">Join now</Button>
    </div>
  );
};

export default FlexCta;
