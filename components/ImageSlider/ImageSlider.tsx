import Image from 'next/image';
import { useState } from 'react';

import ImageSliderStyles from './ImageSliderStyles.module.css';

const ImageSlider: React.FC<{ imgUrlList: string[] }> = ({ imgUrlList }) => {
  const [curIdx, setCurIdx] = useState(0);
  console.log(imgUrlList);
  return (
    <div className={ImageSliderStyles['image-slider-container']}>
      <div>
        <button onClick={() => curIdx > 0 && setCurIdx(curIdx - 1)} />
        <div className={ImageSliderStyles['image-slide-container']}>
          {imgUrlList.map((imgUrl, idx) => (
            <div
              key={idx}
              className={
                ImageSliderStyles['image-slide'] +
                (idx === curIdx ? ' active' : '')
              }
            >
              <Image src={imgUrl} layout='fill' objectFit='contain' />
            </div>
          ))}
        </div>
        <button
          onClick={() =>
            curIdx < imgUrlList.length - 1 && setCurIdx(curIdx + 1)
          }
        />
      </div>
      <div className={ImageSliderStyles['image-slider-dot-list']}>
        {imgUrlList.map((_, idx) => (
          <li
            key={idx}
            className={
              ImageSliderStyles['image-slider-dot'] +
              (idx === curIdx ? ' active' : '')
            }
          >
            <button onClick={() => setCurIdx(idx)} />
          </li>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
