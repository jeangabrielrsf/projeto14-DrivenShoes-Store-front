import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Componentes/GlobalStyles.css";
import Login from "./Componentes/Login.jsx";
import Cadastro from "./Componentes/Cadastro.jsx";
import Payment from "./Componentes/Payment";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/payment" element={ <Payment />}  /> 
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
