import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const PhotoRetouch: NextPage = () => (
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
    <header>
      <h1>사진 보정</h1>
      <Link href="/background-decision" passHref>
        <a href="replace">
          <i role="presentation" aria-label="뒤로 가기" />
        </a>
      </Link>
      <button type="button">완료</button>
    </header>
    <main>
      <Image src="/vercel.svg" alt="얼굴 사진 결과물" width="43" height="42" />
      <section>
        <h2>보정 종류 선택</h2>
        <ul aria-label="종류 목록">
          <li aria-label="type item">
            <button type="button">미백</button>
            <i>|</i>
          </li>
        </ul>
      </section>
      <section>
        <h2>보정하기</h2>
        {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
        <label htmlFor="ratio">0</label>
        <input type="range" name="ratio" id="ratio" min="0" max="100" />
        <label htmlFor="ratio">100</label>
      </section>
    </main>
  </div>
);

export default PhotoRetouch;
