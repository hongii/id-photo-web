import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';
import homeIcon from '../../public/images/home.png';

interface IProps {
  onClickButton?: () => void;
  title: string;
  href: string;
  toMain?: boolean;
}

const Header = ({ title, href, onClickButton, toMain = false }: IProps) => (
  <header className={styles.header}>
    <h1 className={styles.title}>{title}</h1>
    <Link href={href} passHref>
      <a href="replace">
        <i
          className={styles['back-link']}
          role="presentation"
          aria-label="뒤로 가기"
        />
      </a>
    </Link>
    {toMain ? (
      <Link href="/" passHref>
        <a
          href="replace"
          className={styles['home-link']}
          aria-label="메인 화면으로 가기"
        >
          <Image src={homeIcon} alt="홈" layout="fill" />
        </a>
      </Link>
    ) : (
      <button type="button" className={styles.button} onClick={onClickButton}>
        완료
      </button>
    )}
  </header>
);

export default Header;
