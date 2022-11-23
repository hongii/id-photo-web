import React, { useEffect, useState, ChangeEvent } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '@/components/Header';
import RetouchTypes from '@/components/RetouchTypes';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import faceImageState, { withSrc } from 'recoil/faceImage';
import axios from 'axios';
import SkinBeautyRange from '@/components/SkinBeautyRange';
import SlimmingRange from '@/components/SlimmingRange';
import styles from './PhotoRetouch.module.css';

const PhotoRetouch: NextPage = () => {
  const faceSrc = useRecoilValue(withSrc);
  const router = useRouter();
  const [activeType, setActiveType] = useState(0);
  const types: string[] = ['깨끗하게', '슬림하게'];
  const [faceImage, setFaceImage] = useRecoilState(faceImageState);
  const [retouchImageTmp, setRetouchImageTmp] = useState(faceImage);
  const [retouchImageUrlTmp, setRetouchImageUrlTmp] = useState(faceSrc);
  const [selectType, setSelectType] = useState(0);
  const [skinValue, setSkinValue] = useState('0');
  const [slimValue, setSlimValue] = useState('0');
  const [isCheckBtn, setIsCheckBtn] = useState(false);
  // const BEAUTY_API_KEY = process.env.NEXT_PUBLIC_BEAUTY_API_KEY; // 실제 api 호출하려면 주석 풀기
  const FAKE_API_KEY = process.env.NEXT_PUBLIC_FAKE_API_KEY;

  const fetchImage = async (imageURL: string) => {
    const blob = await fetch(imageURL).then((res) => res.blob());
    setRetouchImageTmp(blob);
    setRetouchImageUrlTmp(URL.createObjectURL(blob));
  };

  /* 스킨 뷰티 기능 */
  const handleOnChangeBySkin = async (event: ChangeEvent<HTMLInputElement>) => {
    const rangeValue: string = event.target.value;
    if (+rangeValue === 0 && skinValue === '0') return;

    if (+rangeValue === 0 && skinValue !== '0') {
      setIsCheckBtn(false);
    }
    else {
      setIsCheckBtn(true);
    }
    setSkinValue(rangeValue);

    const degree: string = (+rangeValue / 100).toString();
    const data = new FormData();
    data.append('image', faceImage as Blob, 'photo.png');
    data.append('retouch_degree', degree);
    data.append('whitening_degree', degree);

    const options = {
      method: 'POST',
      url: 'https://ai-skin-beauty.p.rapidapi.com/face/editing/retouch-skin',
      headers: {
        'X-RapidAPI-Key': FAKE_API_KEY, // 실제로 api 호출하려면, BEAUTY_API_KEY로 바꿔넣기
        'X-RapidAPI-Host': 'ai-skin-beauty.p.rapidapi.com',
      },
      data,
    };

    axios
      .request(options)
      .then((response) => {
        const fullImageURL = response.data.data.image_url;
        const fetchImageURL = fullImageURL.substring(41);
        fetchImage(fetchImageURL);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  /* 슬리밍 기능 */
  const handleOnChangeBySlim = (event: ChangeEvent<HTMLInputElement>) => {
    const rangeValue: string = event.target.value;
    if (+rangeValue === 0 && slimValue === '0') return;
    
    if (+rangeValue === 0 && slimValue !== '0') {
      setIsCheckBtn(false);
    }
    else {
      setIsCheckBtn(true);
    }
    setSlimValue(rangeValue);

    const degree: string = (+rangeValue / 50).toString();
    const data = new FormData();
    data.append('image', faceImage as Blob);
    data.append('slim_degree', degree);

    const options = {
      method: 'POST',
      url: 'https://ai-face-slimming.p.rapidapi.com/face/editing/liquify-face',
      headers: {
        'X-RapidAPI-Key': FAKE_API_KEY,// 실제로 api 호출하려면, BEAUTY_API_KEY로 바꿔넣기
        'X-RapidAPI-Host': 'ai-face-slimming.p.rapidapi.com',
      },
      data,
    };

    axios
      .request(options)
      .then((response) => {
        const fullImageURL = response.data.data.image_url;
        const fetchImageURL = fullImageURL.substring(41);
        fetchImage(fetchImageURL);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onClickHandler = (idx: number) => {
    if (activeType !== idx) {
      if ((idx === 0 && slimValue === '0') || idx === 1 && skinValue === '0'){
        setActiveType(idx);
        setSelectType(idx);
      }
    }
  };

  const checkHandler = () => {
    if (selectType === 0) {
      setSkinValue('0');
    } else if (selectType === 1) {
      setSlimValue('0');
    }
    setFaceImage(retouchImageTmp);
    setIsCheckBtn(false);
  };

  useEffect(() => {
    setActiveType(0);
    setSelectType(0);
    setIsCheckBtn(false);
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
        onClickButton={() => {
          if (retouchImageTmp !== faceImage) setFaceImage(retouchImageTmp);
          router.push('/photo-save');
        }}
      />

      <main className={styles.main}>
        <div className={styles['face-image-container']}>
          <div className={styles['face-image']}>
            <Image
              src={retouchImageUrlTmp}
              alt="얼굴 사진 결과물"
              layout="fill"
            />
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
            <div className={styles['ratio-container']}>
              {selectType === 0 ? ( // selectType === 0 : 깨끗하게, selectType === 1 : 슬림하게
                <SkinBeautyRange
                  handleOnChange={handleOnChangeBySkin}
                  skinValue={skinValue}
                />
              ) : (
                <SlimmingRange
                  handleOnChange={handleOnChangeBySlim}
                  slimValue={slimValue}
                />
              )}
            </div>
            <div className={styles['btn-container']}>
              {isCheckBtn ? (
                <button
                  className={styles.activeBtn}
                  type="button"
                  onClick={checkHandler}
                >
                  적용하기
                </button>
              ) :
                <div className={styles.hiddenBtn}/>
              }
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default PhotoRetouch;
