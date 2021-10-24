import { Metadata } from 'lib/models';
import React from 'react';
import TextMetadataListItem from './TextMetadataListItem';
import TextMetadataListStyles from './TextMetadataListStyles.module.css';

const TextMetadataGroupListItem: React.FC<{
  year: string;
  metadataList: Metadata[];
}> = ({ year, metadataList }) => (
  <li className={TextMetadataListStyles['text-metadata-group']}>
    <div className={TextMetadataListStyles['text-metadata-group-year']}>
      {year}
    </div>
    <ul className={TextMetadataListStyles['text-metadata-group-metadata']}>
      {metadataList.map((metadata, idx) => (
        <TextMetadataListItem key={idx} {...metadata} />
      ))}
    </ul>
  </li>
);

export default TextMetadataGroupListItem;
