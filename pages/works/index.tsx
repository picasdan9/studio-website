import Layout from 'components/Layout';
import WorkTile from 'components/WorkTile';
import { getAllPostMetadata } from 'lib/api';
import { Metadata } from 'lib/models';
import { GetStaticPropsResult } from 'next';
import React from 'react';
import styles from './worksStyles.module.css';

const WorksIndexPage: React.FC<{ metadataList: Metadata[] }> = ({
  metadataList,
}) => {
  return (
    <Layout title='works'>
      <div className={styles['work-tile-container']}>
        {metadataList.map((metadata: Metadata) => (
          <WorkTile key={metadata.slug} metadata={metadata} />
        ))}
      </div>
    </Layout>
  );
};

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
