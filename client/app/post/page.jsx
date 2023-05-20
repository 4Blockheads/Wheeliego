/**
 * @author    : gogleset
 * @description : post page 부분입니다.
 **/
import React from 'react';

import { hot, recent } from '../../dummi.json';
import PostList from '../components/PostList/PostList';
import SendSignalButton from '../components/SendSignalButton/SendSignalButton';
import styles from './page.module.css';

const page = () => {
  return (
    <section className={styles.section}>
      <div className={styles.write_box}>
        <SendSignalButton />
      </div>
      <PostList data={hot} type={'Hot'} />
      <PostList data={recent} type={'Recent'} />
    </section>
  );
};

export default page;
