import React from 'react'
import Image from 'next/image';
import { CardInfo } from '../constants/cutSizeData';
import styles from '../pages/cut-size-decision/CutSizeDecision.module.css';

const imgSrc: string[] = [
	"/images/passportImg1.png",
	"/images/studentIdImg2.png",
	"/images/employeeIDImg3.png",
	"/images/visaImg4.png",
];

const Card = ({ ...card }: CardInfo) => (
	<div>
		<li className={styles.card__item} aria-label="cut size item">
			<div className={styles.card__image} >
				<Image
					src={imgSrc[card.id]}
					alt={ card.title}
					width="317"
					height="353"
					layout="responsive"
				/>
			</div>
			<p className={styles['cut-title']}>{card.title}</p>
			<p className={styles['cut-size']}>{card.cutSize}</p>
			<button className={styles['select-btn']} type="button">선택하기</button>
		</li>
	</div>
);

export default Card;