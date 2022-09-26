import Css from "./style";
import axios from "axios";
//import React, { useContext } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
//import UserNameContext from "../contexts/UserNameContext";

export default function Login() {
  const URL = "https://driven-shoes.herokuapp.com/login";
  const Navegar = useNavigate();
  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  //const { setUserName } = useContext(UserNameContext);

  function Logar() {
    if (email && senha) {
      const variavel = axios
        .post(URL, { email: email, password: senha })
        .then((res) => {
          console.log(res);
          //setUserName(res.data.name);
          sessionStorage.tokenete = res.data.token;
          sessionStorage.nome = res.data.name;
          sessionStorage.setItem("user", email);
          Navegar("/home");
          console.log(res.data.name);
          console.log("user", email, senha);
        })

        .catch((error) => {
          console.log(error);
          alert("erro no axios - front");
        });

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
            <Css.LabelFloat>
			  <Css.Input type="email" placeholder="Email"
                required
                onChange={(e) => setEmail(e.target.value)}/>
			  <Css.Input type="password" placeholder="Senha"
                required
                onChange={(e) => setSenha(e.target.value)}/>
            </Css.LabelFloat>
            <Css.Entrar type="submit" onClick={() => Logar()}>
              {" "}
              Entrar{" "}
            </Css.Entrar>

            <Link
              to="/cadastro"
              style={{ paddingLeft: 13, textDecoration: "none" }}
            >
              <p>{" "}
                <Css.Signup>
                  <p> Cadastre-se aqui!</p>
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
