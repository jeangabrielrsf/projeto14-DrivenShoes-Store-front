import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import UserNameContext from "./contexts/UserNameContext.js";
import CartPage from "./components/CartPage/CartPage.js";

export default function App() {
	const [userName, setUserName] = useState("Dev Jean");

	return (
		<>
			<BrowserRouter>
				<UserNameContext.Provider value={{ userName, setUserName }}>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/carrinho" element={<CartPage />} />
					</Routes>
				</UserNameContext.Provider>
			</BrowserRouter>
		</>
	);
}
