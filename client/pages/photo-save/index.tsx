import React, { useEffect } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { withSrc } from 'recoil/faceImage';

const PhotoSave: NextPage = () => {
  const faceSrc = useRecoilValue(withSrc);
  const router = useRouter();

  useEffect(() => {
    if (faceSrc === '/') {
      router.push('/');
    }
  }, [faceSrc, router]);

  return (
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
      <Header title="사진 저장" href="/photo-retouch" toMain />
      <main>
        <Image
          src="/vercel.svg"
          alt="얼굴 사진 결과물"
          width="43"
          height="42"
        />
        <button type="button">저장하기</button>
      </main>
    </div>
  );
};

export default PhotoSave;
