import ImageTile from 'components/ImageTile';
import Layout from 'components/Layout';
import { getAllPostMetadata } from 'lib/api';
import { Metadata } from 'lib/models';
import { GetStaticPropsResult } from 'next';
import React from 'react';

import styles from './imagesStyles.module.css';

const ImagesIndexPage: React.FC<{ metadataList: Metadata[] }> = ({
  metadataList,
}) => {
  return (
    <Layout title='images'>
      <div className={styles['image-tile-container']}>
        {metadataList.map((metadata: Metadata) => (
          <ImageTile key={metadata.slug} metadata={metadata} />
        ))}
      </div>
    </Layout>
  );
};

export default ImagesIndexPage;

export async function getStaticProps(): Promise<
  GetStaticPropsResult<{ metadataList: Metadata[] }>
> {
  const metadataList = await getAllPostMetadata('images');
  return {
    props: {
      metadataList,
    },
  };
}
