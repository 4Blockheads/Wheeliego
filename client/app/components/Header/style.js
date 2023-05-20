import styled from "styled-components";

// export const $Header = styled.header`
//   box-sizing: border-box;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: black;
//   font-size: 2vw;
//   height: 10%;
//   z-index: 2;
//   padding: 0 100px 0 100px;

//   nav {
//     display: flex;
//     width: 30%;
//     font-size: 1vw;
//     justify-content: space-around;
//     align-items: center;
//     color: white;
//   }
//   .button-box {
//     display: flex;
//     flex-direction: column;
//     width: 30vw;
//   }

//   .button {
//     width: 12vw;
//     height: 5vh;
//     border: 2px solid black;
//     border-radius: 20px;
//     font-size: 1vw;
//     text-align: center;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//   }

//   .image-box {
//     width: 200px;
//     height: 70px;
//     position: relative;
//   }
// `;

// export const $Search = styled.div`
//   width: 10vw;
//   height: 5vh;
//   border: 2px solid black;
//   border-radius: 20px;
//   font-size: 1vw;
//   text-align: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

export const $Header = styled.div`
  width: 100vw;
  height: 10vh;
  z-index: 10;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 4vw;
`;

export const $ImageDiv = styled.div`
  width: 10vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const $Nav = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

export const $ButtonsDiv = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const $SearchButton = styled.div`
  width: 11vw;
  height: 4.5vh;
  border-radius: 20px;
  font-size: 1vw;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2vw;
  padding-left: 0.8vw;
  font-weight: bold;
  color: #dddddd;
  background-color: rgba(256, 256, 256, 0.3);

  .image {
    margin-right: 2vw;
  }
`;
