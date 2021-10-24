import { Metadata } from 'lib/models';
import React from 'react';
import TextMetadataGroupListItem from './TextMetadataGroupListItem';
import TextMetdataListStyles from './TextMetadataListStyles.module.css';

const TextMetadataList: React.FC<{ metadataList: Metadata[] }> = ({
  metadataList,
}) => {
  const metadataGroupbyYear = metadataList.reduce(
    reduceMetadataListToGroupbyYear,
    {}
  );

  return (
    <ol className={TextMetdataListStyles['text-metadata-groups-container']}>
      {Object.entries(metadataGroupbyYear)
        .sort(metadataGroupbyYearEntryComparator)
        .map((group, idx) => (
          <TextMetadataGroupListItem
            key={idx}
            year={group[0]}
            metadataList={group[1]}
          />
        ))}
    </ol>
  );
};

const reduceMetadataListToGroupbyYear = (
  metadataGroups: { [key: string]: Metadata[] },
  metadata: Metadata
): { [key: string]: Metadata[] } => {
  if (metadata.year in metadataGroups)
    metadataGroups[metadata.year].push(metadata);
  else metadataGroups[metadata.year] = [metadata];
  return metadataGroups;
};

const metadataGroupbyYearEntryComparator = (
  group1: [string, Metadata[]],
  group2: [string, Metadata[]]
): number => parseInt(group2[0], 10) - parseInt(group1[0], 10);

export default TextMetadataList;
