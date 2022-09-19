import { Link, useNavigate} from "react-router-dom";
import Css from "./style";
import google from '../iconegoogle.png'
import apple from '../iconeapple.png'
import face from '../iconeface.png'
import { useState } from "react";
import axios from "axios";


export default function Cadastro() {
  const URL = "http://localhost:5000/sign-up";


  const Navegar = useNavigate();
  const [ nome, setNome ] = useState();
  const [ email, setEmail ] = useState();
  const [ senha, setSenha ] = useState();
  const [senha1, setSenha1 ] = useState();

  function EnviarCadastro(){
    if(!nome || !email || !senha) return;
    if(senha === senha1){
      axios.post(URL, {
        nome: nome,
        email: email,
        senha: senha,
        senha1: senha1
      }). then( (res)=>{
        console.log(res);
        Navegar('/')
        return alert("Usuário cadastrado com sucesso!")
      }).catch((error)=>{
        console.log(error);
        return alert("Deu problema no cadastro")
      })
    }else{
      alert("As senhas não correspondem!");
    }
  
  }


  return (
    <>
      <Css.Tela>
     
        <form onSubmit={ (e) => {
          EnviarCadastro() 
          e.preventDefault() }}>
          <Css.Caixa>
            <h1>DRIVEN SHOES </h1>
            <Css.Input placeholder="Nome" required onChange={(e)=>{setNome(e.target.value)}}></Css.Input>
            <Css.Input placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}></Css.Input>
            <Css.Input type='password' placeholder="Password" required onChange={(e)=>{setSenha(e.target.value)}}></Css.Input>
            <Css.Input type='password'  placeholder="Repeat Password" required onChange={(e)=>{setSenha1(e.target.value)}} ></Css.Input>
            <Css.Entrar type="submit"> Sign Up </Css.Entrar>

            <Css.BoxConfirmation>
              <Css.Confirmation>
                <img src={apple} alt="apple" />
              </Css.Confirmation>
              <Css.Confirmation>
              <img src={face} alt="face" />
              </Css.Confirmation>
              <Css.Confirmation>
              <img src={google} alt="google" />
              </Css.Confirmation>
            </Css.BoxConfirmation>
            <Link to='/' style={{paddingLeft: 13, textDecoration: 'none'}}>
            <p> If you have an account?<Css.Signup><b> Sign up here!</b></Css.Signup> </p>
            </Link>
          </Css.Caixa>
          
        </form>
      </Css.Tela>
    </>
  );
}
