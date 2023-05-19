/**
 * @author    : gogleset
 * @description : post page 부분입니다.
 **/
import React from "react";

import PostListBox from "../components/PostListBox/RecentPostListBox";
import styles from "./page.module.css";

const page = () => {
  return (
    <section className={styles.section}>
      <PostListBox />
    </section>
  );
};

export default page;
