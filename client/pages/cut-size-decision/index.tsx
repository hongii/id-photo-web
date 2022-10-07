import React,{useState} from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './CutSizeDecision.module.css';
import Card  from '../../components/Card';
import { CardInfo, cutSizeData } from '../../constants/cutSizeData';

const CutSizeDecision: NextPage = () => {
  const [cards] = useState<CardInfo[]>(cutSizeData);

  return (
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
        <section className={styles["card-container"]}>
          <h2 className={styles["screen-reader-only"]}>최종 사진 크기 선택</h2>
          <ul className={styles.card__list} aria-label="컷 사이즈 목록">
            {
              cards.map((card) => <Card title={card.title} id={card.id} cutSize=
                {card.cutSize} key={card.id} />)
            }
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
}

export default CutSizeDecision;
