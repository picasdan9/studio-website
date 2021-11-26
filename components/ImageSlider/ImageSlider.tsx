import { useState } from 'react';

import styles from './ImageSliderStyles.module.css';

const ImageSlider: React.FC<{ imgUrlList: string[] }> = ({ imgUrlList }) => {
  const [curIdx, setCurIdx] = useState<number>(0);

  function computeImgClassName(idx: number): string {
    return styles['img'] + (idx === curIdx ? ' ' + styles['active'] : '');
  }

  function computeBtnControllerClassName(idx: number): string {
    return (
      styles['button-controller'] +
      (idx === curIdx ? ' ' + styles['active'] : '')
    );
  }

  return (
    <div className={styles['image-slider-container']}>
      <div className={styles['image-slider-display']}>
        <button
          disabled={curIdx <= 0}
          onClick={() => setCurIdx(curIdx - 1)}
          className={styles['button-decrement']}
        >
          <div />
        </button>
        <div className={styles['slide']}>
          {imgUrlList.map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} className={computeImgClassName(idx)} />
          ))}
        </div>
        <button
          disabled={curIdx >= imgUrlList.length - 1}
          onClick={() => setCurIdx(curIdx + 1)}
          className={styles['button-increment']}
        >
          <div />
        </button>
      </div>
      <div className={styles['image-slider-controller']}>
        {imgUrlList.map((_, idx) => (
          <button
            key={idx}
            className={computeBtnControllerClassName(idx)}
            onClick={() => setCurIdx(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
