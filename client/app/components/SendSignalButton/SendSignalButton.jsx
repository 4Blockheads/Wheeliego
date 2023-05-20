/**
 * @author    : gogleset
 * @description : signal 보내는 버튼 부분입니다.
 **/
"use client";
import React, { useState } from "react";

import SendSignal from "../SendSignal/SendSignal";

const SendSignalButton = () => {
  const [isClickSendSignalButton, setClickSendSignalButton] = useState(false);
  console.log(isClickSendSignalButton);
  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          // console.log(isClickSendSignalButton);
          setClickSendSignalButton((prev) => {
            return !prev;
          });
        }}
      >
        send to signal
      </button>
      {isClickSendSignalButton ? (
        <SendSignal onClick={setClickSendSignalButton} />
      ) : (
        <></>
      )}
    </>
  );
};

export default SendSignalButton;
