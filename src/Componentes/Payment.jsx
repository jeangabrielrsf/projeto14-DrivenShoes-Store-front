import Css from "./style";
//import axios from "axios";
import React from "react";
//import { Link, useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Payment1 from "../Payment 1.png";
import Payment2 from "../Payment 2.png";
import Payment3 from "../Payment 3.jpg";
import Mastercard from "../Mastercard Logo.png";


export default function Payment() {
  const Navegar = useNavigate();

  return (
    <>
      <Css.TelaBranca>
        <Css.CheckOut>
          <ion-icon
            onClick={() => Navegar("/cart")}
            name="chevron-back-outline"
          ></ion-icon>
          <p>Confirme</p>
          <ion-icon
            onClick={() => Navegar("/home")}
            name="home-outline"
          ></ion-icon>
        </Css.CheckOut>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Css.Mode>
            <p>Formas de pagamento</p>
            <Css.BoxPayment>
              <Css.Payment>
			  
                 <img src={Payment1} alt="" /> 
              </Css.Payment>
              <Css.Payment>
			  
                <img src={Payment2} alt="" /> 
              </Css.Payment>
              <Css.Payment>
			 
                 <img src={Payment3} alt="" /> 
              </Css.Payment>
            </Css.BoxPayment>

            <Css.NumberCard>
              <p>Número do cartão</p>
              <Css.InputPayment
                placeholder="                0000 0000 0000 0000"
                img
                src={Mastercard}
              />
              <ion-icon name="card-outline"></ion-icon>
            </Css.NumberCard>

            <Css.Holder>
              <p>Nome do titular do cartão</p>
              <Css.InputPayment placeholder="                Nome" />
              <ion-icon name="person-outline"></ion-icon>
            </Css.Holder>
            <Css.Less>
              <Css.Column>
                <p>Data de validade</p>
                <Css.OtherLine>
                  <Css.InputDate placeholder="MM / YYYY" />
                </Css.OtherLine>
              </Css.Column>
              <Css.Column>
                <p>CVV</p>
                <Css.OtherLine>
                  <Css.InputDate placeholder="3 digits" />
                </Css.OtherLine>
              </Css.Column>
            </Css.Less>
          </Css.Mode>
        </form>
        <Css.BeforeComplete>
          Verifique seu e-mail para confirmar o <br /> pagamento do seu banco
        </Css.BeforeComplete>
        <Css.BoxComplete>
          <Css.CompletePayment
            onClick={() => alert("Pagamento realizado com sucesso!")}
          >
            Completar Pagamento
          </Css.CompletePayment>
        </Css.BoxComplete>
      </Css.TelaBranca>
    </>
  );
}
