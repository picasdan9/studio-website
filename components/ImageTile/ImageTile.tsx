import { Metadata } from 'lib/models';
import Link from 'next/link';
import React from 'react';

import styles from './ImageTileStyles.module.css';

const ImageTile: React.FC<{ metadata: Metadata }> = ({ metadata }) => {
  return (
    <Link href={{ pathname: `/images/${metadata.slug}` }} passHref>
      <a>
        <div className={styles['image-tile']}>
          <img src={metadata.coverImage} className={styles['cover-image']} />
          <div className={styles['image-title']}>
            <i>{metadata.title}</i>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ImageTile;
