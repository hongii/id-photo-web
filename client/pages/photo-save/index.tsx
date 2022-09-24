import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const PhotoSave: NextPage = () => (
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
      <h1>사진 저장</h1>
      <Link href="/photo-retouch" passHref>
        <a href="replace">
          <i role="presentation" aria-label="뒤로 가기" />
        </a>
      </Link>
      <Link href="/" passHref>
        <a href="replace">
          <i role="presentation" aria-label="메인 화면으로 가기" />
        </a>
      </Link>
    </header>
    <main>
      <Image src="/vercel.svg" alt="얼굴 사진 결과물" width="43" height="42" />
      <button type="button">저장하기</button>
    </main>
  </div>
);

export default PhotoSave;
