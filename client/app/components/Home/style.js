import styled from 'styled-components';

export const $HomeWrap = styled.div`
  width: 100vw;
  height: 84vh;
  z-index: 1;
  display: flex;
`;

export const $ImagesDiv = styled.div`
  width: 60%;
  height: 100%;
`;

export const $TextsDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: end;
  color: white;
  font-size: 1.5vw;
  margin: 15vw 5vw 0 5vw;
  z-index: 2;
`;

export const $Button = styled.button`
  width: 13vw;
  height: 8%;
  border-radius: 20px;
  font-size: 1.5vw;
  text-align: center;
  color: white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.8);
`;
