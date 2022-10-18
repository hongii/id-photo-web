import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Crop from '@/components/Crop';
import Header from '@/components/Header';
import styles from '@/styles/HairDecision.module.css';
import TypeList from '@/components/TypeList';
import HairStyleList from '@/components/HairStyleList';
import { useRecoilValue } from 'recoil';
import { withSrc } from 'recoil/faceImage';
import { useRouter } from 'next/router';

const typeNames = ['롱', '미디움', '단발', '숏컷'];
const hairStyleImages: { [key: string]: string[] } = {
  롱: [
    '/images/hairImg1.png',
    '/images/hairImg2.png',
    '/images/hairImg3.png',
    '/images/hairImg4.png',
  ],
  미디움: [
    '/images/hairImg2.png',
    '/images/hairImg3.png',
    '/images/hairImg4.png',
    '/images/hairImg1.png',
  ],
  단발: [
    '/images/hairImg3.png',
    '/images/hairImg4.png',
    '/images/hairImg1.png',
    '/images/hairImg2.png',
  ],
  숏컷: [
    '/images/hairImg4.png',
    '/images/hairImg1.png',
    '/images/hairImg2.png',
    '/images/hairImg3.png',
  ],
};

const HairDecision: NextPage = () => {
  const [activeType, setActiveType] = useState(0);
  const [selectedHair, setSelectedHair] = useState(-1);
  const faceSrc = useRecoilValue(withSrc);
  const router = useRouter();

  const handleSelectHair = (idx: number) => {
    if (idx === selectedHair) {
      setSelectedHair(-1);
      return;
    }
    setSelectedHair(idx);
  };

  useEffect(() => {
    if (faceSrc === '/') {
      router.push('/');
    }
  }, [faceSrc, router]);

  useEffect(() => {
    setSelectedHair(-1);
  }, [activeType]);

  return (
    <div className={styles.page}>
      <Head>
        <title>ID Photo Web</title>
        <meta name="description" content="id photo generatation service" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        title="헤어 결정"
        href="/"
        onClickButton={() => router.push('/cut-size-decision')}
      />
      <main className={styles.main}>
        <article>
          <h2 className={styles['screen-reader-only']}>사진 조정</h2>
          <Crop faceSrc={faceSrc} />
        </article>
        <article className={styles['select-container']}>
          <section>
            <h2 className={styles['screen-reader-only']}>
              헤어 스타일 종류 선택
            </h2>
            <TypeList
              typeNames={typeNames}
              activeTarget={activeType}
              onClick={setActiveType}
            />
          </section>
          <section className={styles['hair-style-container']}>
            <h2 className={styles['screen-reader-only']}>헤어 스타일 선택</h2>
            <HairStyleList
              images={hairStyleImages[typeNames[activeType]]}
              checkTarget={selectedHair}
              onClick={handleSelectHair}
            />
          </section>
        </article>
      </main>
    </div>
  );
};
export default HairDecision;
