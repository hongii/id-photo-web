import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const HairDecision: NextPage = () => (
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
      <h1>헤어 결정</h1>
      <Link href="/" passHref>
        <a href="replace">
          <i role="presentation" aria-label="뒤로 가기" />
        </a>
      </Link>
      <button type="button">완료</button>
    </header>
    <main>
      <article>
        <h2>사진 조정</h2>
        <canvas aria-label="얼굴 위치 조정" />
      </article>
      <article>
        <section>
          <h2>헤어 스타일 종류 선택</h2>
          <ul aria-label="종류 목록">
            <li aria-label="type item">
              <button type="button">롱</button>
              <i>|</i>
            </li>
          </ul>
        </section>
        <section>
          <h2>헤어 스타일 선택</h2>
          <ul aria-label="스타일 목록">
            <li aria-label="style item">
              <Image
                src="/vercel.svg"
                alt="헤어 스타일 이미지"
                width="43"
                height="42"
              />
            </li>
          </ul>
        </section>
      </article>
    </main>
  </div>
);

export default HairDecision;
