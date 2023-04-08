import { GetServerSideProps } from 'next';

import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const Profile = () => {
  const router = useRouter();
  const { profile } = router.query;
  return <div>{profile}</div>;
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  // authorize user return session

  return {
    props: { ...session },
  };
};
