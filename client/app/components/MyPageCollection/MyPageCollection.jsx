"use client";
import React from "react";
import Image from "next/image";
import $MyPageCollection from "./style";

const MyPageCollection = () => {
  return (
    <$MyPageCollection>
      <div className="title">Friends</div>
      <div className="friends-box">
        <div className="wrapper">
          <div className="image-box"></div>
          {/* <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div>
          <div className="image-box"></div> */}
        </div>
      </div>
      <div className="signal-box">
        <div className="title">signal</div>
        <div className="wrapper">
          <div className="signal-box"></div>
        </div>
      </div>
    </$MyPageCollection>
  );
};

export default MyPageCollection;
