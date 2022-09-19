import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage.js";
import Homepage from "./components/Homepage/Homepage.js";
import UserNameContext from "./contexts/UserNameContext.js";
import ProductPage from "./components/ProductPage/ProductPage.js";
//import "./Componentes/GlobalStyles.css";
import Login from "./Componentes/Login.jsx";
import Cadastro from "./Componentes/Cadastro.jsx";
import Payment from "./Componentes/Payment";

export default function App() {
	const [userName, setUserName] = useState("");

	return (
		<>
			<BrowserRouter>
				<UserNameContext.Provider value={{ userName, setUserName }}>
					<Routes>
						<Route path="/home" element={<Homepage />} />
						<Route path="/carrinho" element={<CartPage />} />
						<Route path="/:idProduto" element={<ProductPage />} />
						<Route path="/payment" element={<Payment />} />
						<Route path="/" element={<Login />} />
						<Route path="/cadastro" element={<Cadastro />} />
					</Routes>
				</UserNameContext.Provider>
			</BrowserRouter>
		</>
	);
}
