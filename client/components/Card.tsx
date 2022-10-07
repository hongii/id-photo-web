import React from 'react';
import Image from 'next/image';
import { CardInfo } from '../constants/cutSizeData';
import styles from '../pages/cut-size-decision/CutSizeDecision.module.css';

const imgSrc: string[] = [
  '/images/passportImg1.png',
  '/images/studentIdImg2.png',
  '/images/employeeIDImg3.png',
  '/images/visaImg4.png',
];

interface IProps {
  card: CardInfo;
}

const Card = ({ card }: IProps) => (
  <li className={styles.card__item} aria-label="cut size item">
    <Image
      src={imgSrc[card.id]}
      alt={`${card.title} 컷 사이즈`}
      width="317"
      height="353"
    />

    <p className={styles['cut-title']}>{card.title}</p>
    <p className={styles['cut-size']}>{card.cutSize}</p>
    <button className={styles['select-btn']} type="button">
      선택하기
    </button>
  </li>
);
export default Card;
