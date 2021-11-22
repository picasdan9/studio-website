import React from 'react';
import styles from './AboutListItemStyles.module.css';

const AboutListItem: React.FC<{ time: string; desc: string }> = ({
  time,
  desc,
}) => (
  <li className={styles['about-item-container']}>
    <div className={styles['time']}>{time}</div>
    <div className={styles['desc']}>{desc}</div>
  </li>
);

export default AboutListItem;
