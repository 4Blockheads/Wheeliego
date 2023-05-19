import styled from 'styled-components';

const $PostListBox = styled.div`
  height: 120px;
  background-color: blanchedalmond;
  border-radius: 15px;
transition: all 1s;
    .wrapper{
        display: flex;
        align-items:center
    }   
  .image-box {
    width: 100px;
    height: 100px;
    background-color: darkcyan;
    border-radius: 15px;
    margin: 0px 10px;
  }
  .contents-box {
    display: block;
    background-color: lightcyan;
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
  .info {
    display: flex;
    justify-content: space-between;
  }
  .info > div {
    display: flex;
    align-items: center;
  }
  .info > div > p {
    margin-right:30px;
    margin-left:5px;
    margin-top: 3.5px;
  }
`;

export default $PostListBox;
