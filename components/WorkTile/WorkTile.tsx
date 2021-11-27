import { Metadata } from 'lib/models';
import Link from 'next/link';
import React from 'react';
import styles from './WorkTileStyles.module.css';

const WorkTile: React.FC<{ metadata: Metadata }> = ({ metadata }) => {
  return (
    <Link href={{ pathname: `/works/${metadata.slug}` }} passHref>
      <a>
        <div className={styles['work-tile']}>
          <img src={metadata.coverImage} className={styles['cover-image']} />
          <div className={styles['work-title']}>
            <i>{metadata.title}</i>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default WorkTile;
