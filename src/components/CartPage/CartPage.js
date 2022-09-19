import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserCartContext from "../../contexts/UserCartContext";
import CartItem from "../CartItem/CartItem";
import { Header } from "../Homepage/Homepage";

export default function CartPage() {
	const navigate = useNavigate();
	const { cart, setCart } = useContext(UserCartContext);
	console.log(cart);

	function deleteCart() {
		setCart([]);
	}

	return (
		<Container>
			<Top>
				<div onClick={() => navigate("/home")}>
					<ion-icon name="chevron-back-outline"></ion-icon>
				</div>
				<h2>Carrinho</h2>
				<div>
					<ion-icon onClick={deleteCart} name="trash-outline"></ion-icon>
				</div>
			</Top>

			<Wrapper>
				{cart.length === 0 ? (
					<p>Você ainda não colocou nada no carrinho :c</p>
				) : (
					<CartWrapper>
						{cart.map((item) => {
							return <CartItem item={item} />;
						})}
					</CartWrapper>
				)}
			</Wrapper>

			<Footer>
				<button onClick={() => navigate("/payment")}>
					<div>Prosseguir para Pagamento</div>
				</button>
			</Footer>
		</Container>
	);
}

const Container = styled.div`
	background-color: #ffffff;
	width: 100%;
	height: 100vh;
	padding: 10px;
	padding-top: 80px;
`;
const Top = styled.div`
	width: 100%;
	font-size: 20px;
	display: flex;
	height: 60px;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #f6f6f6;
	border-radius: 0px 0px 30px 30px;
	padding: 0px 10px;

	ion-icon {
		color: #0acf83;
		font-size: 30px;
	}

	h2 {
		font-weight: 700;
	}
`;

const Footer = styled.div`
	height: 15%;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	background-color: #f6f6f6;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px 30px 0px 0px;

	button {
		background-color: #0acf83;
		color: #fff;
		border-radius: 10px;
		width: 85%;
		height: 50px;
		font-weight: 700;
		font-size: 14px;
		border-color: #f6f6f6;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
