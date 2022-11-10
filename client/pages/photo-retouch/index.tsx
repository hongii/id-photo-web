import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import RetouchTypes from '@/components/RetouchTypes';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { withSrc } from 'recoil/faceImage';
import styles from './PhotoRetouch.module.css';
import axios from 'axios';

const PhotoRetouch: NextPage = () => {
  const faceSrc = useRecoilValue(withSrc);
  const router = useRouter();
  const [activeType, setActiveType] = useState(0);
  const types: string[] = ['미백', '갸름하게'];
  //const BEAUTY_API_KEY = process.env.BEAUTY_API_KEY;

  //const handleOnChange = () => {
    //let fileInput = document.getElementById("fileInput");
    //값이 변경될때 호출 되는 이벤트 리스너
    //console.log(fileInput.files)
    
    /* 스킨 뷰티 기능 */
  //   const data = new FormData();
  //   data.append("image_target", fileInput.files[0], "sample.png");

  //   const options = {
  //     method: 'POST',
  //     url: 'https://photo-retouching.p.rapidapi.com/huoshan/facebody/facepretty',
  //     headers: {
  //       'X-RapidAPI-Key': BEAUTY_API_KEY,
  //       'X-RapidAPI-Host': 'photo-retouching.p.rapidapi.com'
  //     },
  //     data: data
  //   };

  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
//   // }

    /* 슬리밍 기능 */
    // const data = new FormData();
    // data.append("image", fileInput.files[0], "sample.png");
    // data.append("slim_degree", "2.0");

    // const options = {
    //   method: 'POST',
    //   url: 'https://ai-face-slimming.p.rapidapi.com/face/editing/liquify-face',
    //   headers: {
    //     'X-RapidAPI-Key': 'BEAUTY_API_KEY',
    //     'X-RapidAPI-Host': 'ai-face-slimming.p.rapidapi.com'
    //   },
    //   data: data
    // };

    // axios.request(options).then(function (response) {
    //   console.log(response.data);
    // }).catch(function (error) {
    //   console.error(error);
    // });
  //}

  const onClickHandler = (idx: number) => {
    if (activeType !== idx) {
      setActiveType(idx);
    }
  };

  useEffect(() => {
    setActiveType(0);
  }, []);

  useEffect(() => {
    if (faceSrc === '/') {
      router.push('/');
    }
  }, [faceSrc, router]);

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
        title="사진 보정"
        href="/background-decision"
        onClickButton={() => router.push('/photo-save')}
      />

      <main className={styles.main}>
        <div className={styles['face-image-container']}>
          <div className={styles['face-image']}>
            <Image src={faceSrc} alt="얼굴 사진 결과물" layout="fill" />
          </div>
        </div>
        <article className={styles['select-container']}>
          <section>
            <h2 className={styles['screen-reader-only']}>보정 종류 선택</h2>
            <ul aria-label="종류 목록" className={styles['type-select']}>
              {types.map((typeName, idx) => (
                <RetouchTypes
                  key={`KEY_${typeName}`}
                  typeName={typeName}
                  idx={idx}
                  types={types}
                  activeType={activeType}
                  onClickHandler={onClickHandler}
                />
              ))}
            </ul>
          </section>
          <section>
            <h2 className={styles['screen-reader-only']}>보정하기</h2>
            {/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */}
            {/* <input type="file" id='fileInput' onChange={ handleOnChange}></input> */}
            <label htmlFor="ratio">0</label>
            <input className={styles.ratio }type="range" name="ratio" id="ratio" min="0" max="100"/>
            <label htmlFor="ratio">100</label>
          </section>
        </article>
      </main>
    </div>
  );
};

export default PhotoRetouch;
