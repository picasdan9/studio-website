import { Dispatch, SetStateAction } from 'react';

import styles from './ImageSliderStyles.module.css';

const ImageSliderOverlay: React.FC<{
  imgUrlList: string[];
  curIdx: number;
  setCurIdx: Dispatch<SetStateAction<number>>;
  isOverlayOn: boolean;
  setIsOverlayOn: Dispatch<SetStateAction<boolean>>;
}> = ({ imgUrlList, curIdx, setCurIdx, isOverlayOn, setIsOverlayOn }) => {
  const computeOverlayBgClassName = () =>
    styles['overlay-background'] + (isOverlayOn ? ' ' + styles['active'] : '');
  const computeImgClassName = (idx: number): string =>
    styles['img'] + (idx === curIdx ? ' ' + styles['active'] : '');

  return (
    <div
      className={computeOverlayBgClassName()}
      onClick={() => isOverlayOn && setIsOverlayOn(false)}
    >
      <div className={styles['overlay-content']}>
        <div
          className={styles['slide-fullscreen']}
          onClick={(evt) => evt.stopPropagation()}
        >
          {imgUrlList.map((imgUrl, idx) => (
            <img key={idx} src={imgUrl} className={computeImgClassName(idx)} />
          ))}
        </div>
        <div className={styles['overlay-buttons-container']}>
          <button
            disabled={curIdx <= 0}
            onClick={(evt) => {
              evt.stopPropagation();
              if (curIdx > 0) setCurIdx(curIdx - 1);
            }}
            className={styles['button-decrement']}
          >
            <div />
          </button>
          <button
            disabled={curIdx >= imgUrlList.length - 1}
            onClick={(evt) => {
              evt.stopPropagation();
              if (curIdx < imgUrlList.length - 1) setCurIdx(curIdx + 1);
            }}
            className={styles['button-increment']}
          >
            <div />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderOverlay;
