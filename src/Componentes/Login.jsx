import Css from "./style";
import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Login() {
  const URL = "http://127.0.0.1:5000/";
  const Navegar = useNavigate();
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();

  function Logar() {
    if (email && senha) {
      const variavel = axios
        .post(URL, { email: email, password: senha })
        .then((res) => {
          sessionStorage.tokenete = res.data.token;
          sessionStorage.nome = res.data.name;
          sessionStorage.setItem("user", email);
          Navegar("/payment");
          console.log(res.data.name);
          console.log("user",email, senha)
        })

        .catch((error) => console.log(error));
      console.log(variavel, email, senha);
    } else {
      console.log(email, senha);
    }
  }

  return (
    <>
      <Css.Tela>
      
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Css.Caixa>
            <h1>DRIVEN SHOES </h1>
            
            <Css.Input
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></Css.Input>

            <Css.Input type='password'
              placeholder="Password"
              required
              onChange={(e) => setSenha(e.target.value)}
            ></Css.Input>
             <p>Forgot password?</p>
            <Css.Entrar type="submit" onClick={() => Logar()}>
              {" "}
              Sign In{" "}
            </Css.Entrar>
           
            <Link to="/cadastro" style={{paddingLeft: 13, textDecoration: 'none'}}>
              <p>
                If you have an account?{" "}
                <Css.Signup>
                  <b> Sign up here!</b>
                </Css.Signup>
              </p>
            </Link>
          </Css.Caixa>
        </form>
        
          {/* <img src={gourmet} alt="gourmet" /> */}
      </Css.Tela>
    </>
  );
}
