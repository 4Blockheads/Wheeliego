import styled from "styled-components";


const $MyPageProfileBox = styled.div`
  text-align: center;
  font-size: 40px;
  color: white;
  margin-right: 30px;
`;

const $MyPageProfile = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 2px var(--main-color);
  border: 2px solid var(--main-color);
  
  .nickname_box{
    width: 200px;
    height: 200px;
    background-color: aqua;
  }
`;


export { $MyPageProfile, $MyPageProfileBox };
