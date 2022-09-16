import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import UserNameContext from "../../contexts/UserNameContext.js";
import ProductLayer from "../ProductLayer/ProductLayer.js";

export default function Homepage() {
	const { userName, setUserName } = useContext(UserNameContext);
	const [products, setProducts] = useState([]);
	const productsURL = "http://localhost:5000/products";

	useEffect(() => {
		axios
			.get(productsURL)
			.then((result) => {
				console.log(result.data);
				setProducts(result.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, []);

	function showMenu() {
		alert("Aqui vai ser uma funçao irada de menu");
	}
	return (
		<Container>
			<Header>
				<div>
					<ion-icon name="person-circle-outline"></ion-icon>
				</div>
				<Title>DrivenShoes Store</Title>
				<div onClick={showMenu}>
					<ion-icon name="menu-outline"></ion-icon>
				</div>
			</Header>

			<TopText>
				<p>{userName.length > 0 ? `Bem-vindo, ${userName}!` : "Bem-vindo!"}</p>
				<h1>O que você está procurando hoje?</h1>
			</TopText>
			<ProductBox>
				<Category>Tênis</Category>
				<ProductsWrapper>
					{products.map((product, index) => {
						if (product.category === "tênis") {
							return <ProductLayer key={index} product={product} />;
						}
					})}
				</ProductsWrapper>
			</ProductBox>

			<ProductBox>
				<Category>Chinelos</Category>
				<ProductsWrapper>
					{products.map((product, index) => {
						if (product.category === "chinelo") {
							return <ProductLayer key={index} product={product} />;
						}
					})}
				</ProductsWrapper>
			</ProductBox>
		</Container>
	);
}

const Container = styled.div`
	background-color: #f6f6f6;
	width: 100%;
	height: 100vh;
	padding: 10px;
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	ion-icon {
		font-size: 30px;
		color: #0acf83;
	}
`;
const Title = styled.div`
	color: black;
	font-weight: 700;
	font-size: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0px;
`;

const TopText = styled.div`
	p {
		font-size: 16px;
		font-weight: 500;
	}

	h1 {
		font-size: 24px;
		font-weight: 700;
		line-height: 32px;
	}
`;

const ProductsWrapper = styled.div`
	display: flex;
	overflow-y: auto;
	margin-bottom: 15px;
`;

const ProductBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

const Category = styled.div`
	font-size: 20px;
	color: #0acf83;
	border-bottom: 1px solid #0acf83;
	border-top: 1px solid #0acf83;
	padding: 5px;
`;
