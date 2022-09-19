import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserNameContext from "../../contexts/UserNameContext.js";
import ProductLayer from "../ProductLayer/ProductLayer.js";

export default function Homepage() {
	const { userName, setUserName } = useContext(UserNameContext);
	const [products, setProducts] = useState([]);
	const productsURL = "https://driven-shoes.herokuapp.com/products";
	const navigate = useNavigate();
	const categories = [];

	useEffect(() => {
		axios
			.get(productsURL)
			.then((result) => {
				console.log(result.data);
				setProducts(result.data);
				getItensCategories(result.data);

				console.log(categories);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	function getItensCategories(itens) {
		itens.forEach((item) => {
			if (categories.length === 0) {
				categories.push(item.category);
			}

			if (!categories.find((value) => value === item.category)) {
				categories.push(item.category);
			}
		});
	}

	function toCart() {
		navigate("/carrinho");
	}

	return (
		<>
			<Header>
				<div>
					<ion-icon name="person-circle-outline"></ion-icon>
				</div>
				<Title>DrivenShoes Store</Title>
				<div onClick={toCart}>
					<ion-icon name="cart-outline"></ion-icon>
				</div>
			</Header>

			<Container>
				<TopText>
					<p>
						{userName.length > 0 ? `Bem-vindo, ${userName}!` : "Bem-vindo!"}
					</p>
					<h1>O que você está procurando hoje?</h1>
				</TopText>

				<ProductsContainer>
					{categories.map((category) => {
						return (
							<>
								<Category>{category}</Category>
							</>
						);
					})}
					<ProductsWrapper>
						{products.map((product, index) => {
							if (product.category === "tênis") {
								return <ProductLayer key={index} product={product} />;
							}
						})}
					</ProductsWrapper>

					<ProductsWrapper>
						{products.map((product, index) => {
							if (product.category === "chinelo") {
								return <ProductLayer key={index} product={product} />;
							}
						})}
					</ProductsWrapper>
				</ProductsContainer>
			</Container>
		</>
	);
}

export const Container = styled.div`
	background-color: #fff;
	width: 100%;
	height: 100vh;
	padding: 10px;
	padding-top: 80px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	padding: 0 10px;
	background-color: #f6f6f6;
	border-radius: 0px 0px 30px 30px;
	ion-icon {
		font-size: 30px;
		color: #0acf83;
	}
`;
export const Title = styled.div`
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

const Category = styled.div`
	font-size: 20px;
	color: #0acf83;
	border-bottom: 1px solid #0acf83;
	border-top: 1px solid #0acf83;
	padding: 5px;
	z-index: 10;
`;

const ProductsContainer = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
`;
