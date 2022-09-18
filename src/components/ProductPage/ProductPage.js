import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import UserNameContext from "../../contexts/UserNameContext.js";
import { Header, Title } from "../Homepage/Homepage.js";
import SizeNumber from "./SizeNumber.js";




function ProductPage() {

    const { idProduto } = useParams()
    const { userName } = useContext(UserNameContext);
    const productURL = `http://localhost:5000/products/${idProduto}`;
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(0);

    function toCart() {
        navigate("/carrinho");
    }

    function increaseQuantity() {
        if (quantity >= 0) {
            setQuantity(quantity + 1)
        }

    }

    function decreaseQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }



    /* 
        const [product, setProduct] = useState([]);
        const [selectedSize, setSelectedSize] = useState("")
        const [selectedColor, setSelectedColor] = useState("")
    
    
    
        useEffect(() => {
            const promise = axios.get(productURL);
    
            promise.then(response => {
                const { data } = response
                setProduct(data)
    
            })
    
        }, []);
        const { name, image, price, ratio, stock, sizes, colors } = product
       
    
        function buildSizes() {
    
    
            if (product.length === 0) {
                return (
                    <h4>Carregando...</h4>
                )
            } else {
                return (
                    sizes.map((item) =>
                        <SizeNumber key={item.id} id={item.id} number={item.number} isAvailable={item.isAvailable} setSelectedSize={setSelectedSize}/>)
                )
            }
    
        }
    
        
    
    
     */







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
                    <ProductQuantity>
                        <Counter onClick={decreaseQuantity}>-</Counter>
                        {quantity}
                        <Counter onClick={increaseQuantity}>+</Counter>
                    </ProductQuantity>
                    <ConsumersInfos>
                        <ProductRate>
                            <ion-icon name="star"></ion-icon>
                            <h3>4,2</h3>
                        </ProductRate>
                        <ProductReviews> 1057 Reviews</ProductReviews>
                    </ConsumersInfos>
                    <SelectionWrapper>
                        {/*  {buildSizes()} */}
                    </SelectionWrapper>
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
padding: 110px 10px 90px 10px;
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
font-size: 13px;
background: #0ACF83;
border-radius: 10px;
color: white;


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
    margin-bottom: 20px;
}
h2{
    width: 180px;
    font-weight: 700;
    font-size: 24px;
    line-height: 23px;
    text-align: center; 
    margin-bottom: 25px;
}

`;

const ProductQuantity = styled.div`
width: 150px;
height: 30px;
font-weight: 500;
font-size: 24px;
display: flex;
align-items: center;
justify-content: space-around;
margin-bottom: 15px;

`;

const Counter = styled.div`
width: 30px;
height: 30px;
background-color: #FFFFFF;
border: 2px solid #BABABA;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;

`;

const ProductRate = styled.div`
height: 15px;
display: flex;
font-weight: 500;

ion-icon{
    color: #FFC120;
    margin-right: 5px;
    
}

`;

const ProductReviews = styled.h3`
font-weight: 500;
height: 15px;
`;

const ConsumersInfos = styled.div`

width: 160px;
height: 15px;
display: flex;
justify-content: space-between ;
margin-bottom: 20px;

`;

const SelectionWrapper = styled.ul`
width: 100%;
height: 40px;

display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
padding: 0 24px;
margin-bottom: 10px;

`;