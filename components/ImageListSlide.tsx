import CustomNavBar from 'components/Navbar';
import { Page } from 'lib/models';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.css';

const ImageListSlide: React.FC<{ imageUrlList: string[] }> = ({
  imageUrlList,
}) => (
  <div className={styles['image-list-container']}>
    {imageUrlList.map((imageUrl, idx) => (
      <div key={idx} style={{ position: 'relative', width: '100%' }}>
        <Image
          alt='Image Alt'
          src={imageUrl}
          layout='fill'
          objectFit='contain'
        />
      </div>
    ))}
  </div>
);

export default ImageListSlide;
