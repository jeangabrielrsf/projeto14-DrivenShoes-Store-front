import styled from "styled-components";
//font-family: 'Roboto', sans-serif;, cursive; todo o texto
//font-family de titulos: font-family: 'Oswald', sans-serif;

const Css = {
  Tela: styled.div`
    overflow: hidden;
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
      text-shadow: 0 0 4px #fff;
      color: #477082;
      font-family: "Oswald", sans-serif;
      padding: 30px;
      box-shadow: 3px 3px #00000060;
      background-color: lightgray;
      opacity: 0.8;
    }
    p {
      font-family: "Roboto", sans-serif;
      font-weight: bold;
      font-size: 24px;
      color: white;
      cursor: pointer;
      padding: 20px;
      outline: none;
    }
    img {
      width: 200px;
      height: 200px;
    }
  `,
  NumberCard: styled.div`
    input {
      position: relative;
    }
    ion-icon {
      position: absolute;
      width: 25px;
      height: 25px;
      padding: 32px;
      left: 10px;
      color: lightgreen;
    }
  `,
  Holder: styled.div`
    input {
      position: relative;
    }
    ion-icon {
      position: absolute;
      width: 25px;
      height: 25px;
      padding: 32px;
      left: 10px;
      color: lightgreen;
    }
  `,
  Input: styled.input`
    width: 100%;
    padding: 10px 10px;
    display: inline-block;
    border: 0;
    border-bottom: 2px solid white;
    background-color: transparent;
    outline: none;
    min-width: 180px;
    font-size: 26px;
    transition: all 0.3s ease-out;
    border-radius: 0;
    font-weight: bold;
    ::placeholder {
      font-size: 26px;
      font-weight: 700;
      color: white;
      font-family: "Roboto", sans-serif;
      opacity: 0.4;
    }
    :hover {
      border: 1px solid gray;
    }
    :focus {
      border: 1px solid;
      border-bottom: 2px solid white;
      color: white;
      ::placeholder {
        color: white;
        font-weight: 700;
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
    box-sizing: border-box;
    border: 1px solid white;
    background-color: transparent;
    border-radius: 5px;
    margin-top: 20px;
    outline: none;
    height: 50px;
    width: 300px;
    padding: 10px;
    margin-bottom: 1rem;
    background: #477082;
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
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
  Signup: styled.div`
    background-color: #477082;
    width: 100%;
    height: 40px;
    //color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    :hover {
      top: -2px;
      box-shadow: 0 4px 4px #666;
      transition: all 400ms ease;
      background-color: #59503d;
      color: #fff;
    }
    p {
      color: white;
      //opacity: 0.5;
      text-align: center;
    }
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
      font-weight: 600;
      font-family: "Roboto", sans-serif;
      font-size: 20px;
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
    padding: 10px;
    display: flex;
    font-family: "Roboto", sans-serif;
    align-items: center;
    justify-content: center;
    img {
      width: 100px;
      height: 60px;
      border-radius: 10px;
    }
    ion-icon {
      width: 100px;
      height: 60px;
      border-radius: 10px;
      background-color: white;
      color: #0acf83;
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
  Cabecalho: styled.div`
    width: 100%;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    font-weight: 800;
    a {
      font-family: "Roboto", sans-serif;
      transition: all 0.3s ease-out;
      cursor: pointer;
    }
  `,
  InputSite: styled.input`
    height: 32px;
    width: 200px;
    ::placeholder {
      color: black;
    }
  `,
  LabelFloat: styled.div`
    position: relative;
    padding-top: 26px;
    margin-top: 10%;
    margin-bottom: 10%;
    font-weight: bold;
    input {
      width: 100%;
      padding: 10px 10px;
      display: inline-block;
      border: 0;
      border-bottom: 2px solid white;
      background-color: transparent;
      outline: none;
      min-width: 180px;
      font-size: 26px;
      transition: all 0.3s ease-out;
      border-radius: 0;
      font-weight: bold;
    }
  `,
  Video: styled.div`
    height: 500px;
    width: 110%;
    background-color: red;
    object-fit: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    video {
      width: 100%;
      height: 100%;
    }
  `,
  Navigation: styled.div`
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    label {
      width: 90px;
      height: 30px;
      border: 2px solid white;
      margin: 6px;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.4s;
    }
    label:hover {
      background-color: white;
    }
    input {
      display: none;
    }
  `,
  Slides: styled.div`
    display: flex;
    width: 500%;
    height: 100%;
    #slide1:checked ~ .s1 {
      margin-left: 0;
    }
    #slide2:checked ~ .s1 {
      margin-left: -20%;
    }
    #slide3:checked ~ .s1 {
      margin-left: -40%;
    }
    #slide4:checked ~ .s1 {
      margin-left: -60%;
    }
    #slide5:checked ~ .s1 {
      margin-left: -80%;
    }
    input {
      display: none;
    }
  `,
  Slide: styled.div`
    width: 20%;
    transition: 0.6s;
  `,
  SlideS1: styled.div`
    width: 20%;
    transition: 0.6s;
  `,
  Topo: styled.div`
    width: 100vw;
    height: 40px;
    background-color: transparent;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 2px solid lightgray;
    ion-icon {
      width: 36px;
      height: 36px;
      padding: 20px;
      cursor: pointer;
    }
  `,
  BoxCentral: styled.div`
    width: 400px;
    height: 500px;
    background-color: white;
    opacity: 0.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    p {
      align-items: center;
      margin-top: 20px;
      margin-bottom: 20px;
      color: white;
      font-family: 'Roboto';

      font-size: 20px;
    }
  `,
  InputAvatar: styled.input`
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid black;
    font-family: "Roboto";
    cursor: pointer;
  `,
  Perfil: styled.div`
    width: 200px;
    height: 200px;
    background-color: black;
    border-radius: 50% ;
    margin-top: 50px;
    margin-bottom: 50px;
  `,
  TelaRestante: styled.div`
  width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(45deg, #22577a, #38a3a5, #57cc99, #80ed99);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  `,
  NomePerfil: styled.div`
    width: 200px;
    height: 30px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid black;
    background-color: white;
    display: flex;
    align-items: center;
    color: gray;
    font-family: "Roboto";
  `,
  Salvar: styled.button`
    width: 200px;
    height: 30px;
    background-color: #57cc99;
    border-radius: 10px;
    font-family: "Roboto";
    font-size: 20px;
    color: white;
    cursor: pointer;
  `,
};

export default Css;
