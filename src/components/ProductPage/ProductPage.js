import { Axios } from "axios";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import UserNameContext from "../../contexts/UserNameContext.js";
import { Container, Header, Title } from "../Homepage/Homepage.js";




function ProductPage() {

    const { idProduto } = useParams()
    const { userName } = useContext(UserNameContext);
    const productURL = `http://localhost:5000/products/${idProduto}`;
    const navigate = useNavigate();

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


            <ProductWrapper>
                <img src="https://40378.cdn.simplo7.net/static/40378/sku/masculino-60182884d354e-tenis-tenis-nike-air-jordan-3-retro-1619812208892.jpg" alt="Air Jordan" />

                <ProductInfo>
                    <h1>Air Jordan 3 Retrô</h1>
                    <h2>R$ 400,00</h2>
                </ProductInfo>

            </ProductWrapper>
            <Footer>
                <AddToCart>ADICIONE AO CARRINHO</AddToCart>
            </Footer>

        </>
    )
}

export default ProductPage;




const ProductWrapper = styled.div`
width: 100%;
height: 100%;
padding: 120px 20px 75px 20px;
background-color: #f6f6f6;
border-radius: 5px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    width: 100%;
    height: 320px;
    
    border-radius: 15px;
    object-fit: cover;
    margin-bottom: 15px;
}


`;

const Footer = styled.div`
background-color: #FFFFFF;
position: fixed;
bottom: 0;
width: 100%;
height: 75px;
display: flex;
justify-content: center;
align-items: center;


`;

const AddToCart = styled.div`
width: 60%;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
background: #0ACF83;
border-radius: 10px;


`;

const ProductInfo = styled.div`
width: 100%;
min-height: 300px;
background-color: #ffffff;
border-radius: 15px;
display: flex;
flex-direction: column;
align-items: center;
padding: 30px;


h1{
    
    font-size: 27px;
    line-height: 23px;
    text-align: center; 
    margin-bottom: 15px;
}
h2{
    width: 180px;
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    text-align: center; 
}



`;