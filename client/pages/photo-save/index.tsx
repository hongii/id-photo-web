import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { withSrc } from 'recoil/faceImage';
import styles from '@/styles/PhotoSave.module.css';

const PhotoSave: NextPage = () => {
  const faceSrc = useRecoilValue(withSrc);
  const router = useRouter();
  const [downloadURL, setDownloadURL] = useState(faceSrc);

  useEffect(() => {
    if (faceSrc === '/') {
      router.push('/');
    }
  }, [faceSrc, router]);

  useEffect(() => {
    const img = document.createElement('img');
    const [w, h] = [3.5, 4.5];
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalWidth * (h / w);
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, img.naturalWidth, img.naturalWidth * (h / w));
      const url = canvas.toDataURL();
      setDownloadURL(url);
    };
    img.src = faceSrc;
  }, [faceSrc]);

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
      <Header title="사진 저장" href="/photo-retouch" toMain />
      <main className={styles.main}>
        <div className={styles['face-image-container']}>
          <div className={styles['face-image']}>
            <Image src={faceSrc} alt="얼굴 사진 결과물" layout="fill" />
          </div>
        </div>
        <div className={styles['download-container']}>
          <a
            href={downloadURL}
            download={`id-photo-result-${Date.now()}`}
            className={styles.download}
          >
            저장하기
          </a>
        </div>
      </main>
    </div>
  );
};

export default PhotoSave;
