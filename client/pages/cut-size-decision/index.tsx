import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './CutSizeDecision.module.css';

const CutSizeDecision: NextPage = () => (
  <div>
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
      <h1>컷 사이즈</h1>
      <Link href="/hair-decision" passHref>
        <a href="replace">
          <i role="presentation" aria-label="뒤로 가기" />
        </a>
      </Link>
    </header>
    <main>
      <section>
        <h2>최종 사진 크기 선택</h2>
        <ul aria-label="컷 사이즈 목록">
          <li aria-label="cut size item">
            <Image
              src="/vercel.svg"
              alt="주민등록증/여권용 컷 사이즈"
              width="43"
              height="42"
            />
            <p>주민등록증/여권용</p>
            <p>컷 사이즈 3.5cm x 4.5cm</p>
            <button type="button">선택하기</button>
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
