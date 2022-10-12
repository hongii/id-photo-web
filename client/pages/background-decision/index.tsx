import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';

const BackgroundDecision: NextPage = () => (
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
    <Header title="배경 결정" href="/cut-size-decision" />
    <main>
      <Image src="/vercel.svg" alt="얼굴 사진 결과물" width="43" height="42" />
      <section>
        <h2>배경 종류 선택</h2>
        <ul aria-label="종류 목록">
          <li aria-label="type item">
            <button type="button">단색</button>
            <i>|</i>
          </li>
        </ul>
      </section>
      <section>
        <h2>배경 색상 선택</h2>
        <ul aria-label="색상 목록">
          <li aria-label="color item">
            <button type="button">#ffffff</button>
          </li>
        </ul>
      </section>
    </main>
  </div>
);

export default BackgroundDecision;
