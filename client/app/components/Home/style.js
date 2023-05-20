import styled from "styled-components";

export const $HomeWrap = styled.div`
  width: 100vw;
  height: 100%;
  z-index: 1;
  display: flex;
  padding: 0 4vw;
`;

export const $ImagesDiv = styled.div`
  width: 60%;
  height: 65vh;
  display: flex;
  margin-left: 12vw;
  margin-top: 7vh;
`;

export const $ImageLeft = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  position: relative;
  animation: move 2.5s infinite;

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 50px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const $ImageRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 50%;
  animation: move 2.5s infinite;
  animation-delay: 1.25s;

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 50px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

export const $TextsDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: end;
  color: white;
  font-size: 1.1vw;
  margin: 15vw 5vw 0 5vw;
  z-index: 2;
`;

export const $ButtonDiv = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  margin-top: 2vh;
  padding-right: 5%;
`;

export const $Button = styled.button`
  margin-right: 5%;
  width: 11vw;
  height: 100%;
  border-radius: 20px;
  font-size: 1.5vw;
  text-align: center;
  color: white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const $WhiteButton = styled($Button)`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
`;
