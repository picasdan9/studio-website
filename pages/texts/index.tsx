import Layout from 'components/Layout';
import { getAllPostMetadata } from 'lib/api';
// import { useAppContext } from 'lib/api';
import { Metadata } from 'lib/models';
import { GetStaticPropsResult } from 'next';
import React from 'react';
import styles from 'styles/Home.module.css';

const TextsIndex: React.FC<{ metadataList: Metadata[] }> = ({
  metadataList,
}) => {
  const metadataGroupbyYear: { [key: string]: Metadata[] } =
    metadataList.reduce(reduceMetadataListToGroupbyYear, {});

  return (
    <Layout title='texts'>
      <div className={styles['post-groups-container']}>
        {Object.entries(metadataGroupbyYear)
          .sort(metadataGroupbyYearEntryComparator)
          .map((group: [string, Metadata[]]) => (
            <MetadataGroupbyYearComponent
              key={group[0]}
              year={group[0]}
              metadataList={group[1]}
            />
          ))}
      </div>
    </Layout>
  );
};

const reduceMetadataListToGroupbyYear = (
  metadataGroups: { [key: string]: Metadata[] },
  metadata: Metadata
) => {
  if (metadata.year in metadataGroups)
    metadataGroups[metadata.year].push(metadata);
  else metadataGroups[metadata.year] = [metadata];
  return metadataGroups;
};

const metadataGroupbyYearEntryComparator = (
  group1: [string, Metadata[]],
  group2: [string, Metadata[]]
) => parseInt(group2[0], 10) - parseInt(group1[0], 10);

const MetadataGroupbyYearComponent: React.FC<{
  year: string;
  metadataList: Metadata[];
}> = ({ year, metadataList }) => (
  <div key={year} className={styles['post-group']}>
    <div className={styles['post-year']}>{year}</div>
    <div className={styles['post-metadata']}>
      {metadataList.map(renderMetadata)}
    </div>
  </div>
);

const renderMetadata = (metadata: Metadata) => (
  <div key={metadata.slug}>
    <a href={metadata.url}>
      <i>{metadata.title}</i>
    </a>
    <span className={styles['text-index-page-metadata-sans']}>
      , {metadata.type}
      {metadata.externalSiteName && <>, {metadata.externalSiteName}</>}
    </span>
  </div>
);

export default TextsIndex;

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
