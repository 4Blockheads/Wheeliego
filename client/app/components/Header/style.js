import styled from 'styled-components';

const $Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 2vw;
  height: 10%;
  z-index: 2;
  h1 {
    margin-left: 3%;
    color: black;
  }
  nav {
    display: flex;
    font-size: 1.5vw;
  }
  ul{
    margin-right: 10px;
  }
  button {
    width: 15vw;
    border: 1px solid black;
    border-radius: 20px;
    font-size: 1.5vw;
    margin-right: 3%;
  }
`;


export default $Header;
