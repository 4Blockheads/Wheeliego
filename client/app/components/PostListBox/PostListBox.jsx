/**
 * @author    : gogleset
 * @description : post page에서 시그널을 출력하는 box 부분입니다.
 **/
"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { data } from "../../../dummi.json";

import $PostListBox from "./style";

const PostListBox = () => {
  // 좋아요 수
  // 좋아요를 눌렀나 안눌렀나 감지
  // 시그널 수 눌렀나 안눌렀나 감지
  const [isClickSignals, setIsClickSignals] = useState(false);

  // 하트버튼 눌렀을때
  const handleCountedHeartsNum = (event) => {
    console.log("read");
  };
  // 댓글 버튼 눌렀을 때
  const handleClickSignals = (event) => {
    // console.log("click");
    event.preventDefault();
    setIsClickSignals((prev) => {
      return !prev;
    });
    // postListBox에 접근
    const $postListBox =
      event.target.parentElement.parentElement.parentElement.parentElement
        .parentElement;
    if (isClickSignals) {
      $postListBox.style.height = "400px";
    } else {
      $postListBox.style.height = "120px";
    }

    // console.log("isClickSignals:::  " + isClickSignals);
  };
  return (
    <div style={{ height: "600px", overflow: "scroll" }}>
      {data &&
        data.map((value, index) => {
          // console.log(value);
          let hearted = value.hearted;
          return (
            <$PostListBox key={index}>
              <div className="wrapper">
                <div className="image-box">
                  {/* <Image src="/toki1.png" fill /> */}
                </div>
                <div className="contents-box">
                  <h1>Hot Signal</h1>
                  <p className="contents">{value.content}</p>
                  <div className="info">
                    <p>{value.date}</p>
                    <div>
                      {/* hearts */}
                      <Image
                        // false면 빈 하트, 아니면 채운 하트
                        src={
                          hearted ? "/heart-solid.svg" : "/heart-regular.svg"
                        }
                        width={20}
                        height={20}
                        alt="heart count"
                        onClick={(event) => {
                          if (hearted) {
                            event.currentTarget.nextElementSibling.innerHTML--;
                            hearted = false;
                            event.currentTarget.src = "/heart-regular.svg";
                            console.log("hearted");
                          } else {
                            event.currentTarget.nextElementSibling.innerHTML++;
                            hearted = true;
                            event.currentTarget.src = "/heart-solid.svg";
                            console.log("not hearted");
                          }
                        }}
                      />
                      <p>{value.hearts}</p>
                      {/* signals */}
                      <Image
                        src="/walkie-talkie-solid.svg"
                        width={20}
                        height={20}
                        alt="signal count"
                        onClick={handleClickSignals}
                      />
                      <p>{value.signals}</p>
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
        })}
    </div>
  );
};

export default PostListBox;
