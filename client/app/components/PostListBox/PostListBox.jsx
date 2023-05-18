/**
 * @author    : gogleset
 * @description : post page에서 시그널을 출력하는 box 부분입니다.
 **/
'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import $PostListBox from './style';

const PostListBox = () => {
  // 좋아요 수
  const [countedHeartsNum, setCountedHeartsNum] = useState(123);
  // 좋아요를 눌렀나 안눌렀나 감지
  const [isCountedHearts, setIsCountedHearts] = useState(false);
  // 시그널 수 눌렀나 안눌렀나 감지
  const [isClickSignals, setIsClickSignals] = useState(false);
  // 최상위 부모 BOX 접근
  const postListBoxRef = useRef();

  // 하트버튼 눌렀을때
  const handleCountedHeartsNum = () => {
    // 참이면 거짓으로 거짓이면 참으로 바꿔주기
    setIsCountedHearts((prev) => {
      return !prev;
    });
    // 참이라면
    if (isCountedHearts) {
      // 하나 내려주고
      setCountedHeartsNum((prev) => {
        return prev - 1;
      });
      // 거짓이라면
    } else {
      // 하나 올려주기
      setCountedHeartsNum((prev) => {
        return prev + 1;
      });
    }
  };
  // 댓글 버튼 눌렀을 때
  const handleClickSignals = (event) => {
    event.preventDefault();
    setIsClickSignals((prev) => {
      return !prev;
    });
    if (isClickSignals) {
      return (postListBoxRef.current.style.height = '400px');
    } else {
      return (postListBoxRef.current.style.height = '120px');
    }
  };

  return (
    <$PostListBox ref={postListBoxRef}>
      <div className="wrapper">
        <div className="image-box">{/* <Image src="/toki1.png" fill /> */}</div>
        <div className="contents-box">
          <h1>Hot Signal</h1>
          <p className="contents">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit,
            beatae perferendis sapiente dicta quasi animi ducimus nobis iste
            obcaecati neque minima ut molestiae repellendus fugiat quae? Beatae
            facere perspiciatis suscipit. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Velit, beatae perferendis sapiente
            dicta quasi animi ducimus nobis iste obcaecati neque minima ut
            molestiae repellendus fugiat quae? Beatae facere perspiciatis
            suscipit.
          </p>
          <div className="info">
            <p>03/15</p>
            <div>
              {/* hearts */}
              <Image
                // false면 빈 하트, 아니면 채운 하트
                src={`/heart-${isCountedHearts ? 'solid' : 'regular'}.svg`}
                width={20}
                height={20}
                alt="heart count"
                onClick={handleCountedHeartsNum}
              />
              <p>{countedHeartsNum}</p>
              {/* signals */}
              <Image
                src="/walkie-talkie-solid.svg"
                width={20}
                height={20}
                alt="signal count"
                onClick={handleClickSignals}
              />
              <p>2</p>
              {/* share */}
              <Image
                src="/share-nodes-solid.svg"
                width={20}
                height={20}
                alt="sharing our friends"
              />
            </div>
          </div>
        </div>
      </div>
    </$PostListBox>
  );
};

export default PostListBox;
