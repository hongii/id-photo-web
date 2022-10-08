import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Crop from '@/components/Crop';
import Header from '@/components/Header';

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
    <Header title="헤어 결정" href="/" />
    <main>
      <article>
        <h2>사진 조정</h2>
        <Crop />
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
