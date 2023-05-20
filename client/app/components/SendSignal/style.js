import styled from 'styled-components';

const $SendSignal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  .signal_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 500px;
    background-color: var(--toki-color-violet);
    box-shadow: 4px 4px var(--main-color);
    border: 2px solid var(--main-color);
    border-radius: 20px;
  }
  .signal_box h1 {
    text-align: center;
    font-size: 40px;
  }
  .signal_box textarea {
    margin-top: 30px;
    width: 80%;
    height: 250px;
    border-radius: 10px;
    border: 2px solid var(--main-color);
    background-color: var(--toki-color-green);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color-sub);
    padding: 5px 10px;
    outline: none;
    font-size: 20px;
  }
  .signal_box button {
    margin: 10px 0px;
  }
  .button_box {
    display: flex;
    align-items: flex-end;
  }
  .button_box button {
    margin: 30px;
  }
`;

export default $SendSignal;
