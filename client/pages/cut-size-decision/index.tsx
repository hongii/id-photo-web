import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CutSizeDecision.module.css';

// interface CardInfo{
//   id: number;
//   title: string;
//   cutSize: string;
// }

const CutSizeDecision: NextPage = () => 
  
    // const [cards, setcards] = useState<CardInfo[]>([]);
  (
    <div className={styles.container}>
      <Head>
        <title>ID Photo Web</title>
        <meta name="description" content="id photo generatation service" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Link href="/hair-decision" passHref>
          <a href="replace" className={styles['back-btn__link']}>
            <i role="presentation" aria-label="뒤로 가기" />‹
          </a>
        </Link>
        <h1 className={styles.title}>컷 사이즈</h1>
        <button type="button" className={styles['complete-btn']}>
        완료
      </button>
      </header>
      <main className={styles.main}>
        <section className={ styles["card-container"]}>
          <h2 className={styles["screen-reader-only"]}>최종 사진 크기 선택</h2>
          <ul className={styles.card__list} aria-label="컷 사이즈 목록">
            <li className={styles.card__item} aria-label="cut size item">
              <div className={ styles.card__image} >
                <Image
                  src="/images/passportImg1.png"
                  alt="주민등록증/여권용 컷 사이즈"
                  width="317"
                  height="353"
                />
              </div> 
              <p className={styles['cut-title']}>주민등록증/여권/운전면허증/수능원서/공무원원서용</p>
              <p className={styles['cut-size']}>컷 사이즈 3.5cm x 4.5cm</p>
              <button className={styles['select-btn']} type="button">선택하기</button>
            </li>
            <li className={styles.card__item} aria-label="cut size item">
              <div className={ styles.card__image} >
                <Image
                  src="/images/studentIdImg2.png"
                  alt="반명함/학생증 컷 사이즈"
                  width="317"
                  height="353"
                />
              </div> 
              <p className={styles['cut-title']}>반명함/학생증/일부 자격증 및 이력서용</p>
              <p className={styles['cut-size']}>컷 사이즈 3cm x 4cm</p>
              <button className={styles['select-btn']} type="button">선택하기</button>
          </li>
          <li className={styles.card__item} aria-label="cut size item">
              <div className={ styles.card__image} >
                <Image
                  src="/images/employeeIDImg3.png"
                  alt="사원증/포트폴리오 컷 사이즈"
                  width="317"
                  height="353"
                />
              </div> 
              <p className={styles['cut-title']}>사원증/일부 지원서/포트폴리오용</p>
              <p className={styles['cut-size']}>컷 사이즈 5cm x 7cm</p>
              <button className={styles['select-btn']} type="button">선택하기</button>
            </li>
            <li className={styles.card__item} aria-label="cut size item">
              <div className={ styles.card__image} >
                <Image
                  src="/images/visaImg4.png"
                  alt="비자 컷 사이즈"
                  width="317"
                  height="353"
                />
              </div> 
              <p className={styles['cut-title']}>미국.중국.일본 비자(VISA)용</p>
              <p className={styles['cut-size']}>미국비자 컷 사이즈 5.1cm x 5.1cm</p>
              <p className={styles['cut-size']}>중국비자 컷 사이즈 3.3cm x 4.8cm</p>
              <p className={styles['cut-size']}>일본비자 컷 사이즈 4.5cm x 4.5cm</p>
              <button className={styles['select-btn']} type="button">선택하기</button>
            </li>
          </ul>
        </section>
        <ul>
          <li aria-label="item link">
            <i role="presentation" />
          </li>
        </ul>
      </main>
    </div>
  );

export default CutSizeDecision;
