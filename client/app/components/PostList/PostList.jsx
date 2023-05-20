/**
 * @author    : gogleset
 * @description : post page에서 시그널을 출력하는 box 부분입니다.
 **/
'use client';
import React from 'react';

import PostListBox from './PostListBox';

const PostList = (props) => {
  const data = props.data;
  const type = props.type;
  return (
    <div
      style={
        type == 'Recent'
          ? {
            height: '600px',
            overflow: 'scroll',
          }
          : {}
      }
    >
      {data &&
        data.map((value, index) => {
          // 좋아요를 눌렀나 안눌렀나 감지
          // 시그널 수 눌렀나 안눌렀나 감지
          console.log(value);
          return (
            <PostListBox key={index} type={type} index={index} value={value} />
          );
        })}
    </div>
  );
};

export default PostList;
