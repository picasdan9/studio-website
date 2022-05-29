import { Metadata } from 'lib/models';
import React from 'react';
import TextEntryGroup from './TextEntryGroup';
import TextIndexStyles from './TextIndexStyles.module.css';

const TextIndex: React.FC<{ metadataList: Metadata[] }> = ({
  metadataList,
}) => {
  const metadataGroupbyYear = metadataList.reduce(
    reduceMetadataListToGroupbyYear,
    {}
  );

  return (
    <ol className={TextIndexStyles['txt-entry-grp-list']}>
      {Object.entries(metadataGroupbyYear)
        .sort(metadataGroupbyYearEntryComparator)
        .map((group, idx) => (
          <TextEntryGroup key={idx} year={group[0]} metadataList={group[1]} />
        ))}
    </ol>
  );
};

const reduceMetadataListToGroupbyYear = (
  metadataGroups: { [key: string]: Metadata[] },
  metadata: Metadata
): { [key: string]: Metadata[] } => {
  const year = new Date(metadata.timestamp).getUTCFullYear();
  if (year in metadataGroups) metadataGroups[year].push(metadata);
  else metadataGroups[year] = [metadata];
  return metadataGroups;
};

const metadataGroupbyYearEntryComparator = (
  group1: [string, Metadata[]],
  group2: [string, Metadata[]]
): number => parseInt(group2[0], 10) - parseInt(group1[0], 10);

export default TextIndex;
