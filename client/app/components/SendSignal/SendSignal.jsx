/**
 * @author    : gogleset
 * @description : 글 작성 component입니다.
 **/
'use client';
import React from 'react';
import * as ReactDOM from 'react-dom';

import $SendSignal from './style';

const SendSignal = (props) => {
  const PortalModal = (props) => {
    // 모달이 마운트 될 엘리먼트. 루트 엘리먼트와 다른 곳이다.
    const modal = document.querySelector('#modal-root');
    // 모달 앨리먼트를 modalRoot에 마운트할 것이다.
    return ReactDOM.createPortal(<$SendSignal {...props} />, modal);
  };
  const portalModalClickHandler = (event) => {
    props.onClick((prev) => {
      return !prev;
    });
  };

  return (
    <PortalModal>
      <div className="signal_box">
        <h1>send signal</h1>
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          maxLength={140}
        />
        <div className="button_box">
          <button>작성하기</button>
          <button onClick={portalModalClickHandler}>뒤로가기</button>
        </div>
      </div>
    </PortalModal>
  );
};

export default SendSignal;
