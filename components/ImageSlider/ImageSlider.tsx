import { useState } from 'react';
import ImageSliderContainer from './ImageSliderContainer';
import ImageSliderOverlay from './ImageSliderOverlay';

const ImageSlider: React.FC<{ imgUrlList: string[] }> = ({ imgUrlList }) => {
  const [curIdx, setCurIdx] = useState<number>(0);
  const [isOverlayOn, setIsOverlayOn] = useState<boolean>(false);

  return (
    <>
      <ImageSliderOverlay
        imgUrlList={imgUrlList}
        curIdx={curIdx}
        setCurIdx={setCurIdx}
        isOverlayOn={isOverlayOn}
        setIsOverlayOn={setIsOverlayOn}
      />
      <ImageSliderContainer
        imgUrlList={imgUrlList}
        curIdx={curIdx}
        setCurIdx={setCurIdx}
        isOverlayOn={isOverlayOn}
        setIsOverlayOn={setIsOverlayOn}
      />
    </>
  );
};

export default ImageSlider;
