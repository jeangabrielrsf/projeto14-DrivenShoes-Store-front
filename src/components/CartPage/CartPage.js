import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CartPage() {
	const navigate = useNavigate();
	const arrayTeste = [];

	function goToCheckout() {}

	return (
		<Container>
			<Top>
				<div onClick={() => navigate("/home")}>
					<ion-icon name="chevron-back-outline"></ion-icon>
				</div>
				<h2>Carrinho</h2>
				<div>
					<ion-icon name="trash-outline"></ion-icon>
				</div>
			</Top>

			<Wrapper>
				{arrayTeste.length === 0 ? (
					<p>Você ainda não colocou nada no carrinho :c</p>
				) : (
					""
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
`;
const Top = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 20px;

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
	}
`;

const Wrapper = styled.div`
	margin: 20px 0px;
	border: 1px solid red;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
