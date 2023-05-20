import styled from 'styled-components';

const $PostListBox = styled.div`
  height: 120px;
  background-color: ${(props) => {
    if (props.type === 'Recent') {
      return 'black';
    } else if (props.type === 'Hot' && props.index === 0) {
      return 'rgb(190, 97, 139)';
    } else if (props.type === 'Hot' && props.index === 1) {
      return 'rgb(237, 147, 145)';
    }
  }};
  border-radius: 15px;
  transition: all 0.5s;
  margin: 10px 0px;
  color: white;
  .wrapper {
    display: flex;
    align-items: center;
    color: ${(props) => {
    if (props.type === 'Recent') {
      return 'white';
    } else {
      return 'black';
    }
  }};
  }
  .image-box {
    width: 100px;
    height: 100px;
    border-radius: 15px;
    margin: 0px 10px;
    position: relative;
  }
  .contents-box {
    display: block;
    width: 90%;
    height: 120px;
  }
  .contents-box h1 {
    font-size: 20px;
    font-weight: bold;
  }
  .contents {
    margin-bottom: 10px;
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
  }
  .comment_content {
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all; // 문단으로 끊어져서 줄바꿈 됨
  }
  .info {
    display: flex;
    justify-content: space-between;
    color: ${(props) => {
    return 'white';
  }};
  }
  .info > div {
    display: flex;
    align-items: center;
  }
  .info > div > p {
    margin-right: 30px;
    margin-left: 5px;
    margin-top: 3.5px;
  }
`;

export default $PostListBox;
