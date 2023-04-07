import React from 'react';
import { User, Row, Col, Text, Button, Spacer, Grid } from '@nextui-org/react';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
export const UserTwitterCard = () => {
  //   const [following, setFollowing] = React.useState(false);
  const { data: session } = useSession();
  return (
    <Grid.Container
      className='user-twitter-card__container'
      css={{
        mw: '300px',
        borderRadius: '$lg',
        padding: '$sm',
      }}
    >
      <Row justify='space-around' align='center'>
        <Col span={8}>
          <User
            src={session?.user?.image!}
            name={session?.user?.name!}
            description={session?.user?.email!}
            css={{ px: 0 }}
          />
        </Col>
        <Col span={4}>
          <Row>
            <Button
              auto
              rounded
              onPress={() => {
                signOut();

                // setFollowing(!following)
              }}
              css={{
                maxHeight: '$space$12',
                fs: '$xs',
                fontWeight: '$semibold',
                // borderColor: following ? '$foreground' : '$primary',
                // color: following ? '$foreground' : '$white',
              }}
              color='primary'
              //   bordered={following}
            >
              {/* {following ? 'Unfollow' : 'Follow'} */}
              Çıkış Yap
            </Button>
          </Row>
        </Col>
      </Row>
    </Grid.Container>
  );
};
