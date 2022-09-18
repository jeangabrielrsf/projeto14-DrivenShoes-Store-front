import styled from "styled-components";
//font-family: 'Roboto', sans-serif;, cursive; todo o texto
//font-family de titulos: font-family: 'Oswald', sans-serif;

const Css = {
  Tela: styled.div`
    box-sizing: border-box;
    background-image: url(https://images.pexels.com/photos/1437916/pexels-photo-1437916.jpeg?cs=srgb&dl=pexels-abhishek-gaurav-1437916.jpg&fm=jpg.jpg);
    //background: linear-gradient(45deg,#22577A,#38A3A5, #57CC99,#80ED99 );
    //background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 10px;
    height: 100vh;
    -moz-box-align: center;
    -moz-box-pack: center;
    justify-content: center;
    animation: colors 5s ease infinite;
    @keyframes colors {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    span {
      text-decoration: none;
      color: white;
    }

    ion-icon {
      width: 120px;
      height: 120px;
      color: white;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 70px;
      font-weight: 700;
      margin-bottom: 50px;
      color: #477082;
      font-family: "Oswald", sans-serif;
      padding: 30px;
      text-decoration: none !important;
      box-shadow: 3px 3px  #00000060;
      background-color: lightgray;
      opacity: 0.8;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
      cursor: pointer;
      padding: 20px;
      outline: none;
      text-decoration: none !important;
    }
    img {
      width: 200px;
      height: 200px;
    }
  `,
  Input: styled.input`
    border-radius: 5px;
    box-sizing: border-box;
    border-bottom: 2px solid #9a6243;
    border: none;
    outline: none;
    height: 50px;
    width: 300px;
    padding: 20px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all .3s ease-out;
    
    ::placeholder {
      font-size: 16px;
      font-weight: 400;
      color: lightgray;
      font-family: "Roboto", sans-serif;
    }
    :hover {
      border: 1px solid gray;
    }
    :focus {
      border: 1px solid #154d2e;
      border-bottom: 2px solid black;
      ::placeholder {
        color: #808080;
      }
    }
  `,

  InputContainer: styled.div`
    position: relative;
  `,
  Caixa: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Entrar: styled.button`
    //border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 5px;
    outline: none;
    height: 50px;
    width: 300px;
    padding: 10px;
    margin-bottom: 1rem;
    background: #477082;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    :hover {
      top: -2px;
      box-shadow: 0 4px 4px #666;
      transition: all 400ms ease;
      background-color: #59503d;
      color: #fff;

    }
  `,
  BoxConfirmation: styled.div`
    display: flex;
  `,
  Confirmation: styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 5px;
    /* margin-left:1rem;
margin-right:1rem; */
    margin-left: 10px;
    margin-right: 10px;
    justify-content: space-around;
    margin-top: 100px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
    }
  `,
  Signup: styled.span`
    color: #0acf83;
    text-decoration: none;
  `,
  BoxLogin: styled.div`
    width: 50px;
    height: 100px;
    color: #031a3e;
  `,
  TelaBranca: styled.div`
    box-sizing: border-box;
    text-decoration: none !important;
    padding: 10px;
    height: 100vh;
    -moz-box-align: center;
    -moz-box-pack: center;
    font-family: "Roboto", sans-serif;
    justify-content: center;
  `,
  CheckOut: styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    p {
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      font-size: 16px;
      text-align: center;
    }
    ion-icon {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  `,
  BoxPayment: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
  `,

  Mode: styled.div`
    background: #f6f6f6;
    //height: 476px;
    width: 100%;
    border-radius: 30px;
    margin-top: 10px;
    font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    p {
      padding: 20px;
      font-size: 18px;
      font-weight: 500;
    }
  `,
  Payment: styled.div`
    width: 357px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    font-family: "Roboto", sans-serif;
    img {
      width: 100px;
      height: 60px;
      border-radius: 10px;
      background-color: white;
    }
  `,
  InputPayment: styled.input`
    height: 55px;
    width: 70%;
    border-radius: 8px;
    margin: 20px;
    border: #eef1f4;
    background-color: #eef1f4;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
    ::placeholder {
      font-size: 18px;
      font-weight: 300;
    }
    img {
      width: 10px;
      height: 10px;
    }
  `,
  InputDate: styled.input`
    height: 55px;
    width: 70%;
    border-radius: 8px;
    margin: 20px;
    border: none;
    background-color: #eef1f4;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
  `,
  Less: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Roboto", sans-serif;
  `,
  BeforeComplete: styled.p`
    font-size: 18px;
    font-weight: 700;
    text-align: center;
    margin-top: 20px;
    color: #3a3c3f;
    font-family: "Roboto", sans-serif;
  `,
  BoxComplete: styled.div`
    display: flex;
    justify-content: center;
    font-family: "Roboto", sans-serif;
  `,
  OtherLine: styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Roboto", sans-serif;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Roboto", sans-serif;
  `,

  CompletePayment: styled.button`
    height: 68px;
    width: 325px;
    border-radius: 8px;
    color: white;
    background-color: #0acf83;
    border: none;
    font-size: 20px;
    font-weight: 800;
    margin-top: 20px;
    cursor: pointer;
    margin-bottom: 50px;
    font-family: "Roboto", sans-serif;
  `,
};

export default Css;
