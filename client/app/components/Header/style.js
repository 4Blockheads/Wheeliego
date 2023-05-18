import styled from 'styled-components';

const $Header = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 2vw;
  height: 10%;
  z-index: 2;
  padding: 30px;

  h1 {
    color: black;
  }
  nav {
    display: flex;
    font-size: 1.5vw;
  }
  ul {
    display: block;
    margin-right: 30px;
    padding-top: 3.3px;
  }
  button {
    width: 13vw;
    border: 2px solid black;
    border-radius: 20px;
    font-size: 1.5vw;
    text-align: center;
  }
  .image-box {
    width: 150px;
    height: 50px;
    position: relative;
  }
`;


export default $Header;
