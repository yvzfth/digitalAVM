import { Card, Col, Row, Button, Text } from '@nextui-org/react';
interface Props {
  category: string;
  img: string;
  buttonText: string;
  isNew?: boolean;
  titleWhite?: boolean;
}
export default function App(props: Props) {
  return (
    <Card css={{ h: '400px' }}>
      <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
        <Col>
          {props.isNew && (
            <Text
              size={12}
              weight='bold'
              transform='uppercase'
              color='#ffffffAA'
            >
              New
            </Text>
          )}
          <Text
            className='text-2xl'
            color={props.titleWhite ? 'white' : 'black'}
          >
            {props.category}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={props.img}
          width='100%'
          height={400}
          objectFit='cover'
          alt='Card example background'
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: 'absolute',
          bgBlur: '#ffffff66',
          borderTop: '$borderWeights $light solid rgba(255, 255, 255, 0.2)',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row justify='flex-start'>
              <Button flat auto rounded color='secondary'>
                <Text
                  css={{ color: 'inherit' }}
                  size={12}
                  weight='bold'
                  transform='uppercase'
                >
                  {props.buttonText}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
