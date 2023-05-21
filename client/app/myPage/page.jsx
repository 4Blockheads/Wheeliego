/**
 * @author    : gogleset
 * @description : 내 정보를 볼 수 있는 페이지 컴포넌트 입니다.
 **/
'use client';
import React from 'react';

import MyPageCollection from '../components/MyPageCollection/MyPageCollection';
// import { boolCheckCookie } from "../utils/cookie";
import MyPageProfile from '../components/myPageProfile/myPageProfile';
// import { useRouter } from "next/navigation";
// import { useAccount } from "wagmi";
import $MyPage from './style';

const page = () => {
  // const account = useAccount();
  // const router = useRouter();
  // console.log(account);
  // const { isConnected } = account;

  // const checkId = boolCheckCookie("id");
  // console.log(checkId && isConnected);
  // 분기 처리
  // if (isConnected && checkId) {
  //   return <$MyPage>page</$MyPage>;
  // }
  // alert("no account");
  // return router.push("/");

  return (
    <$MyPage>
      <MyPageProfile />
      <MyPageCollection />
    </$MyPage>
  );
};

export default page;
