import ReactDOM from "react-dom";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Componentes/GlobalStyles.css";
import Login from "./Componentes/Login.jsx";
import Cadastro from "./Componentes/Cadastro.jsx";
import Payment from "./Componentes/Payment";
import Homepage from "../src/components/Homepage/Homepage";
import Perfil from "./Componentes/Perfil";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/payment" element={ <Payment />}  /> 
        <Route path="/home" element={<Homepage />} />
        <Route path="/perfil" element={<Perfil />} />
        
      </Routes>
    </BrowserRouter>
  );
}

//import App from "./App";
//import "./styles/reset.css";
//import "./styles/style.css";
ReactDOM.render(<App />, document.querySelector(".root"));
