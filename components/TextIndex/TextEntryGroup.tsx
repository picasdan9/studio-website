import { Metadata } from 'lib/models';
import React from 'react';
import TextEntry from './TextEntry';
import TextIndexStyles from './TextIndexStyles.module.css';

const TextEntryGroup: React.FC<{
  year: string;
  metadataList: Metadata[];
}> = ({ year, metadataList }) => (
  <li className={TextIndexStyles['txt-entry-grp']}>
    <div className={TextIndexStyles['txt-entry-grp-yr'] + ' sans'}>
      <b>{year}</b>
    </div>
    <ul className={TextIndexStyles['txt-entry-grp-content']}>
      {metadataList.map((metadata, idx) => (
        <TextEntry key={idx} {...metadata} />
      ))}
    </ul>
  </li>
);

export default TextEntryGroup;
