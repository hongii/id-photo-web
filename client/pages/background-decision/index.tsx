import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import styles from '@/styles/BackgroundDecision.module.css';
import TypeList from '@/components/TypeList';
import ColorList from '@/components/ColorList';
import { useRecoilValue } from 'recoil';
import { withSrc } from 'recoil/faceImage';
import { useRouter } from 'next/router';

const typeNames = ['단색', '그라데이션'];
const colorOptions: { [key: string]: string[] } = {
  단색: ['#ffffff', '#f5f5f5', '#cecece', '#b1b1b1'],
  그라데이션: [
    'linear-gradient(red, white)',
    'linear-gradient(orange, white)',
    'linear-gradient(green, white)',
    'linear-gradient(pink, white)',
  ],
};

const BackgroundDecision: NextPage = () => {
  const [activeType, setActiveType] = useState(0);
  const [activeColor, setActiveColor] = useState('');
  const faceSrc = useRecoilValue(withSrc);
  const router = useRouter();

  useEffect(() => {
    if (faceSrc === '/') {
      router.push('/');
    }
  }, [faceSrc, router]);

  const handleChangeType = (idx: number) => {
    setActiveType(idx);
    setActiveColor('');
  };

  return (
    <div className={styles['page-layout']}>
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
        title="배경 결정"
        href="/cut-size-decision"
        onClickButton={() => router.push('/photo-retouch')}
      />
      <main className={styles.main}>
        <div className={styles['face-image-container']}>
          <div className={styles['face-image']}>
            <Image src={faceSrc} alt="얼굴 사진 결과물" layout="fill" />
          </div>
        </div>
        <article className={styles['select-container']}>
          <section>
            <h2 className={styles['screen-reader-only']}>배경 종류 선택</h2>
            <TypeList
              typeNames={typeNames}
              activeTarget={activeType}
              onClick={handleChangeType}
            />
          </section>
          <section>
            <h2 className={styles['screen-reader-only']}>배경 색상 선택</h2>
            <ColorList
              activeTarget={activeColor}
              colors={colorOptions[typeNames[activeType]]}
              onClick={setActiveColor}
              isGradient={typeNames[activeType] === '그라데이션'}
            />
          </section>
        </article>
      </main>
    </div>
  );
};

export default BackgroundDecision;
