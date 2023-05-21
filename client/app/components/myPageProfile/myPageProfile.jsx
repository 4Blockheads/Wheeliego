/**
 * @author    : gogleset
 * @description : mypage 컴포넌트 안 프로필과 프로필 사진 컴포넌트입니다.
 **/
"use client";
import React from "react";
import { $MyPageProfile, $MyPageProfileBox } from "./style";

import Image from "next/image";

const MyPageProfile = () => {
  return (
    <$MyPageProfileBox>
      <$MyPageProfile>
        <div>
          <Image src={"/alien1.png"} fill />
        </div>
      </$MyPageProfile>
      <div className="nickname_box">
        <span>naiasdij123</span>
      </div>
    </$MyPageProfileBox>
  );
};

export default MyPageProfile;
