import Css from "./style";
//import axios from "axios";
import React from "react";
//import { Link, useNavigate } from "react-router-dom";
import Payment1 from "../Payment 1.png";
import Payment2 from "../Payment 2.png";
import Payment3 from "../Payment 3.jpg";
import Mastercard from "../Mastercard Logo.png"

export default function Payment() {
  return (
    <>
      <Css.TelaBranca>
        <Css.CheckOut>
          <ion-icon name="chevron-back-outline"></ion-icon>
          <p>Checkout</p>
          <ion-icon name="home-outline"></ion-icon>
        </Css.CheckOut>
        <Css.Mode>
          <p>Mode of payment</p>
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
          <p>Card number</p>
          <Css.InputPayment placeholder="0000 0000 0000 0000" img src={Mastercard} />
          <p>Cardholder’s name</p>
          <Css.InputPayment placeholder="Name" />
          <Css.Less >
            <Css.Column>
            <p>Expiry date</p>
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
          <Css.BeforeComplete>Check your email to confirm <br /> payment from your Bank</Css.BeforeComplete>
        <Css.BoxComplete>
        <Css.CompletePayment>Complete Payment</Css.CompletePayment>
        </Css.BoxComplete>
      </Css.TelaBranca>
    </>
  );
}
