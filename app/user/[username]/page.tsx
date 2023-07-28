import Layout from '@/components/Layout';
import { GetServerSideProps } from 'next';
// import { Session } from 'next-auth/core/types';

import { getSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
import React from 'react';

const Profile = ({ username }: { username: string }) => {
  return (
    <Layout>
      <div>{username}</div>
    </Layout>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  // const username = context.params?.username as string;
  const username = context.query.username;
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  // if (!username) {
  //   return {
  //     redirect: {
  //       destination: '/404',
  //       permanent: false,
  //     },
  //   };
  // }
  // authorize user return session

  return {
    props: { session: session || null, username: username || null },
  };
};
