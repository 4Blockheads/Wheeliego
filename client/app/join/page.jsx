'use client';
import axios from 'axios';
import { useRef } from 'react';
import { useAccount } from 'wagmi';
function page() {
  const { connector, isConnected, address } = useAccount();
  const inputRef = useRef();

  const onClickBtn = async () => {
    if (isConnected) {
      console.log(inputRef.current.value);
      try {
        const response = await axios.post(
          'http://3.34.138.199:8080/api/signup',
          {
            userWallet: address,
            userNickname: inputRef.current.value,
          }
        );
        console.log(response.status);
        const data = response.data;
      } catch (error) {
        console.log(error.response.status);
      }
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button type="button" onClick={onClickBtn}>
        회원가입
      </button>
    </>
  );
}

export default page;
