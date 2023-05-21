/**
 * @author    : gogleset
 * @description : post page에서 시그널을 출력하는 box 부분입니다.
 **/
'use client';
import Image from 'next/image';
import React, { useState } from 'react';

import Comment from '../Comment/Comment';
import $PostListBox from './style';

const PostListBox = (props) => {
  console.log(props);
  const [heart, setHeart] = useState(false);
  const [signal, setSignal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // 3초 후 렌더링
  function countVisible() {
    //   참일때
    if (isVisible) {
      setIsVisible((prev) => {
        return (prev = false);
      });
      // 거짓일때
    } else {
      const timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => {
        clearTimeout(timeoutId); // Clean up the timeout if the component unmounts before it fires
      };
    }
  }

  const imageURl = `/alien${Math.floor(Math.random() * 5) + 1}.png`;

  return (
    <$PostListBox key={props.index} type={props.type} index={props.index}>
      <div className="wrapper">
        <div className="image-box">
          <Image src={imageURl} fill style={{ borderRadius: '20px' }} />
        </div>
        <div className="contents-box">
          <h1>{`${props.type == 'Recent' ? 'Recent' : 'Hot'} Signal`}</h1>
          <p className="contents">{props.value.content}</p>
          <div className="info">
            <p>{props.value.date}</p>
            <div>
              {/* hearts */}
              <Image
                // false면 빈 하트, 아니면 채운 하트
                src="/heart.png"
                width={20}
                height={20}
                alt="heart count"
                onClick={(event) => {
                  if (heart) {
                    event.currentTarget.nextElementSibling.innerHTML--;
                    setHeart((prev) => {
                      return !prev;
                    });
                  } else {
                    event.currentTarget.nextElementSibling.innerHTML++;
                    setHeart((prev) => {
                      return !prev;
                    });
                  }
                }}
              />
              <p>{props.value.hearts}</p>
              {/* signals */}
              <Image
                src={
                  props.type === 'Recent'
                    ? '/signal-white.png'
                    : '/signal-black.png'
                }
                width={20}
                height={20}
                alt="signal count"
                onClick={(event) => {
                  setSignal((prev) => {
                    return !prev;
                  });
                  console.log(signal);

                  countVisible();

                  // postListBox에 접근
                  const $postListBox =
                    event.target.parentElement.parentElement.parentElement
                      .parentElement.parentElement;
                  if (!signal) {
                    $postListBox.style.height = '500px';
                  } else {
                    $postListBox.style.height = '120px';
                  }
                }}
              />
              <p>{props.value.signals}</p>
              {/* share */}
              {/* <Image
                        src="/share-nodes-solid.svg"
                        width={20}
                        height={20}
                        alt="sharing our friends"
                      /> */}
            </div>
          </div>
        </div>
      </div>
      {isVisible && <Comment type={props.type} />}
    </$PostListBox>
  );
};

export default PostListBox;
