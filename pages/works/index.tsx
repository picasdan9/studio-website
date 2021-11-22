import Layout from 'components/Layout';
import { getAllPostMetadata } from 'lib/api';
import { Metadata } from 'lib/models';
import { GetStaticPropsResult } from 'next';
import Link from 'next/link';
import React from 'react';

const WorksIndexPage: React.FC<{ metadataList: Metadata[] }> = ({
  metadataList,
}) => {
  return <Layout title='works'>{metadataList.map(renderMetadata)}</Layout>;
};

const renderMetadata = (metadata: Metadata) => (
  <div key={metadata.slug}>
    <Link href={{ pathname: `/works/${metadata.slug}` }} passHref>
      <a>
        <i>{metadata.title}</i>
      </a>
    </Link>
  </div>
);

export default WorksIndexPage;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ metadataList: Metadata[] }>
> {
  const metadataList = await getAllPostMetadata('works');
  return {
    props: {
      metadataList,
    },
  };
}
