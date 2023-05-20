/**
 * @author    : gogleset
 * @description : 페이지 맨 밑 Footer Components
 **/
'use client';
import Image from 'next/image';
import React from 'react';

import $Comment from './style';

const Comment = (props) => {
  return (
    <div>
      <$Comment>
        <div className="header_box" type={props.type}>
          <h1>Comment</h1>
        </div>
        <div className="comment_box">
          <div className="comment_inner_box">
            <div className="wrapper">
              <div className="comment_user_box">
                <div className="comment_user_image" />
                <div>
                  <span>asd!23</span>
                </div>
              </div>
              <div className="comment_content_box">
                <h3 className="comment_content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, neque similique eaque amet doloribus aliquam
                  laboriosam eius omnis est vitae ipsa, porro obcaecati quasi
                  odio consequuntur deleniti perspiciatis alias? Molestiae.
                </h3>
                <span>{'03/13'}</span>
              </div>
            </div>
            <div className="wrapper">
              <div className="comment_user_box">
                <div className="comment_user_image" />
                <div>
                  <span>asd!23</span>
                </div>
              </div>

              <div className="comment_content_box">
                <h3 className="comment_content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, neque similique eaque amet doloribus aliquam
                  laboriosam eius omnis est vitae ipsa, porro obcaecati quasi
                  odio consequuntur deleniti perspiciatis alias? Molestiae.
                </h3>
                <span>{'03/13'}</span>
              </div>
            </div>
            <div className="wrapper">
              <div className="comment_user_box">
                <div className="comment_user_image" />
                <div>
                  <span>asd!23</span>
                </div>
              </div>

              <div className="comment_content_box">
                <h3 className="comment_content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, neque similique eaque amet doloribus aliquam
                  laboriosam eius omnis est vitae ipsa, porro obcaecati quasi
                  odio consequuntur deleniti perspiciatis alias? Molestiae.
                </h3>
                <span>{'03/13'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="user_comment_box">
          <div className="wrapper">
            <div className="comment_user_box">
              <div className="comment_user_image" />
              <div>
                <span>asd!23</span>
              </div>
            </div>
            <div className="comment_user_input">
              <input type="text" name="user" id="user" />
              <Image
                src="/signal-black.png"
                alt={'signal-image'}
                width={15}
                height={15}
                style={{ position: 'absolute', top: '19px', left: '140px' }}
              />
              <Image
                src="/heart.png"
                alt={'send-image'}
                width={15}
                height={15}
                style={{ position: 'absolute', top: '20px', right: '18px' }}
              />
            </div>
          </div>
        </div>
      </$Comment>
    </div>
  );
};

export default Comment;
