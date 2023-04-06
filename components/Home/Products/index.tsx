import { Card, Grid, Row, Text } from '@nextui-org/react';
import products from '@/utils/products';
export default function App() {
  return (
    <Grid.Container gap={2} justify='flex-start'>
      {products.map((item, index) => (
        <Grid xs={6} sm={3} key={index}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit='cover'
                width='100%'
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: 'flex-start' }}>
              <Row wrap='wrap' justify='space-between' align='center'>
                <Text b>{item.title}</Text>
                <Text
                  css={{
                    color: '$accents7',
                    fontWeight: '$semibold',
                    fontSize: '$sm',
                  }}
                >
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
}
