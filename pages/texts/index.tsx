import Layout from 'components/Layout';
import TextIndex from 'components/TextIndex';
import { getAllPostMetadata } from 'lib/api';
import { Metadata } from 'lib/models';
import { GetStaticPropsResult } from 'next';
import React from 'react';

const TextsIndexPage: React.FC<{ metadataList: Metadata[] }> = ({
  metadataList,
}) => {
  return (
    <Layout title='texts'>
      <TextIndex metadataList={metadataList} />
    </Layout>
  );
};

export default TextsIndexPage;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ metadataList: Metadata[] }>
> {
  const metadataList = await getAllPostMetadata('texts');
  return {
    props: {
      metadataList,
    },
  };
}
