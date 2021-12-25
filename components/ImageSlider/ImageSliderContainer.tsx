import { Dispatch, SetStateAction } from 'react';

import styles from './ImageSliderStyles.module.css';

const ImageSliderContainer: React.FC<{
  imgUrlList: string[];
  curIdx: number;
  setCurIdx: Dispatch<SetStateAction<number>>;
  isOverlayOn: boolean;
  setIsOverlayOn: Dispatch<SetStateAction<boolean>>;
}> = ({ imgUrlList, curIdx, setCurIdx, isOverlayOn, setIsOverlayOn }) => {
  const computeImgClassName = (idx: number): string =>
    styles['img'] + (idx === curIdx ? ' ' + styles['active'] : '');
  const computeBtnControllerClassName = (idx: number): string =>
    styles['button-controller'] +
    (idx === curIdx ? ' ' + styles['active'] : '');

  return (
    <div className={styles['image-slider-container']}>
      <div className={styles['image-slider-display']}>
        <button
          disabled={curIdx <= 0}
          onClick={() => curIdx > 0 && setCurIdx(curIdx - 1)}
          className={styles['button-decrement']}
        >
          <div />
        </button>
        <div
          onClick={() => {
            !isOverlayOn && setIsOverlayOn(true);
          }}
          className={styles['slide']}
        >
          {imgUrlList.map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} className={computeImgClassName(idx)} />
          ))}
        </div>
        <button
          disabled={curIdx >= imgUrlList.length - 1}
          onClick={() =>
            curIdx < imgUrlList.length - 1 && setCurIdx(curIdx + 1)
          }
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

export default ImageSliderContainer;
