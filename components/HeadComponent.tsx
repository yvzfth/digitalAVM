import React from 'react';
import Head from 'next/head';
const HeadComponent = ({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) => {
  return (
    <Head>
      <title>{title ? title : 'Digital AVM'}</title>
      <meta
        name='description'
        content={description ? description : 'Digital AVM'}
      />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/logo.ico' />
    </Head>
  );
};
export default HeadComponent;
