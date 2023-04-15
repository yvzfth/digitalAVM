import { Card, Grid, Row, Text } from '@nextui-org/react';
import products from '@/utils/products';
import { useRouter } from 'next/router';
import _ from 'lodash';
interface Props {
  title: string;
}
export default function App(props: Props) {
  const router = useRouter();
  return (
    <div className='m-4'>
      <Text className='text-2xl'>{props.title}</Text>
      <div className='flex overflow-x-scroll w-full gap-2 p-4'>
        {products.map((item, index) => (
          <div className='min-w-[10rem] min-h-[10rem]' key={index}>
            <Card
              isPressable
              onClick={() =>
                router.push('/products/' + _.kebabCase(item.title))
              }
            >
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={item.img}
                  objectFit='cover'
                  width='100%'
                  height={160}
                  alt={item.title}
                />
              </Card.Body>
              {/* <Card.Footer css={{ justifyItems: 'flex-start' }}>
                <Row wrap='wrap' justify='space-between' align='center'>
                  <Text b>{item.title}</Text>
                  <Text
                    css={{
                      color: '$accents7',
                      fontWeight: '$semibold',
                      fontSize: '$sm',
                    }}
                  >
                    {item.price}₺
                  </Text>
                </Row>
              </Card.Footer> */}
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
