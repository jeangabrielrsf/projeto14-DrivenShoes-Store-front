import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Categories from "../../Categories/Categories.js";
import Css from "../../Componentes/style.js";
import UserNameContext from "../../contexts/UserNameContext.js";
import ProductLayer from "../ProductLayer/ProductLayer.js";
import image2 from "../Homepage/2.jpg";
import pexels2 from "../Homepage/pexels2.jpg";
import pexels3 from "../Homepage/pexels3.jpg";
import image4 from "../Homepage/4.jpg";
import saltos from "../Homepage/saltos.jpg";
import pexels from "../pexels.jpg";
import infantil from "../Homepage/infantil.jpg";
import video from "../Homepage/pexelsvideo.mp4";
//import "node_modules/video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
//<link rel="stylesheet" href="/css/video-react.css" />;

export default function Homepage() {
  //const { userName, setUserName } = useContext(UserNameContext);
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
        //getItensCategories(result.data);

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
            {/* {userName.length > 0 ? `Bem-vindo, ${userName}!` : "Bem-vindo!"} */}
          </p>
          <h1>Para quem você compra?</h1>
        </TopText>
        <Css.Cabecalho>
          <a>HOMEM</a>
          <a>MULHER</a>
          <a>INFANTIL</a>
          <a>ESPORTES</a>
          <a>MARCAS</a>
          <a>COLEÇÕES</a>
          <Css.InputSite placeholder="Procurar"></Css.InputSite>
        </Css.Cabecalho>
        <Css.Video>
          <Css.Slides>
            <input type="radio" name="slide" id="slide1" />
            <input type="radio" name="slide" id="slide2" />
            <input type="radio" name="slide" id="slide3" />
            <input type="radio" name="slide" id="slide4" />
            <input type="radio" name="slide" id="slide5" />

            <Css.SlideS1 className="s1">
               <img src={pexels} alt="1" /> 
         
            </Css.SlideS1>
            <Css.Slide>
              <img src={saltos} alt="2" />
            </Css.Slide>
            <Css.Slide>
              <img src={pexels2} alt="3" />
            </Css.Slide>
            <Css.Slide>
              <img src={infantil} alt="4" />
            </Css.Slide>
            <Css.Slide>
              <img src={pexels3} alt="5" />
            </Css.Slide>
            <Css.Navigation>
              <label class="bar" for="slide1"></label>
              <label class="bar" for="slide2"></label>
              <label class="bar" for="slide3"></label>
              <label class="bar" for="slide4"></label>
              <label classN="bar" for="slide5"></label>
            </Css.Navigation>
          </Css.Slides>
        </Css.Video>
        <ProductsContainer>
          {products.map((product, index) => {
            let itemCategory = product.category;
            console.log("testei");
            if (!categories.find((value) => value === product.category)) {
              categories.push(product.category);
              return (
                <>
                  <Categories key={index} category={product.category} />
                  <ProductsWrapper>
                    {products.map((product, index) => {
                      console.log("map do tênis");
                      if (product.category === itemCategory) {
                        return <ProductLayer key={index} product={product} />;
                      }
                    })}
                  </ProductsWrapper>
                </>
              );
            }
          })}
          {/* <ProductsWrapper>
						{products.map((product, index) => {
							console.log("map do tênis");
							if (product.category === "tênis") {
								return <ProductLayer key={index} product={product} />;
							}
						})}
					</ProductsWrapper>

					<ProductsWrapper>
						{products.map((product, index) => {
							console.log("map do chinelo");
							if (product.category === "chinelo") {
								return <ProductLayer key={index} product={product} />;
							}
						})}
					</ProductsWrapper> */}
        </ProductsContainer>
      </Container>
    </>
  );
}

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100vh;
  //padding: 10px;
  padding-top: 80px;
`;

export const Header = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  padding: 20px 20px;
  background-color: #f6f6f6;
  //border-radius: 0px 0px 30px 30px;
  ion-icon {
    font-size: 30px;
    cursor: pointer;
    color: #0acf83;
  }
  z-index: 10;
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
    padding: 0 20px;
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  overflow-y: auto;
  margin-bottom: 15px;
`;

const ProductsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;
