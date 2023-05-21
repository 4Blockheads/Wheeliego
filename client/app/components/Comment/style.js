import styled from 'styled-components';

const $comment = styled.div`
  height: 190px;
  margin-top: 60px;
  margin-left: 50px;
  margin-right: 50px;

  .header_box {
    color: ${(props) => {
    if (props.type === 'Hot') {
      return 'black';
    } else {
      return 'white';
    }
  }};
    border-bottom: 2px solid ${(props) => {
    if (props.type === 'Hot') {
      return 'black';
    } else {
      return 'white';
    }
  }};
    height: auto;
  }
  .comment_box {
    width: 100%;
    height: 100%;
    padding-left: 70px;
  }
  .user_comment_box{
      width: 100%;
    height: 80px;
    /* background-color: aqua; */
    padding-left: 70px;
    margin-top: 10px;
    position: relative;
  }
  .comment_inner_box {
    margin-top: 15px;
    width: 100%;
    height: 100%;
    /* background-color: blanchedalmond; */
    overflow: scroll;
  }
  .wrapper{
    height: 80px;
    /* background-color: whitesmoke; */
  }
  .comment_user_box{
    display: flex;
    flex-direction: column;
    align-items: center
    justify-self: center;
    text-align: center;
  }
  .comment_user_image{
    width: 50px;
    height: 50px;
    background-color:aquamarine;
    border-radius: 10px;
  }
  /* .comment_user_image_wrapper{
    position: relative;
    overflow: hidden;
  } */
  .comment_content_box{
    /* background-color: aqua; */
    width: 100%;
    height: 100%;
    padding: 5px  20px;
  }
  .comment_content_box span{
    color: white;
  }
  .comment_user_input{
    width: 100%;
    padding: 0px 10px;
    
  }
  .comment_user_input input{
    width: 100%;
  border-radius: 30px;
  margin-bottom: 25px;
  padding-left: 30px;
  padding-right: 30px;
    color: black;
  }
  .img-signal{
    position: absolute;
    width: 23px;
    height: 23px;
    top: 16.5px;
    left: 131px;
    background-image: url("../../public/heart.png");
  }
`;

export default $comment;
