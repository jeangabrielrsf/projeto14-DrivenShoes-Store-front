import { useState } from "react";
import styled from "styled-components";





const borderSelecionado = "#1AAE9E";
const colorDisponivel = "#d5dee6";
const borderDisponivel = "#7B8B99";



function SizeNumber ({id, number, setSelectedSize, selectedSize}){
    const [selecionar, setSelecionar] = useState(false);
    console.log(selectedSize);

   

    return (
        <SizeModel key={id} number={number} color={colorDisponivel} border={selecionar? borderSelecionado:borderDisponivel} onClick={() => {
            setSelectedSize(number)
            setSelecionar(!selecionar)
            
        }} >
            <h3>{number}</h3>
        </SizeModel>

    )

    

    
    

   
}



export default SizeNumber;




export const SizeModel = styled.li`
width: 25px;
height: 25px;
background-color: ${props => props.color};
border: 2px solid ${props => props.border};
border-radius: 17px;
margin-bottom: 2px;
margin-right: 9px;
display: flex;
align-items: center;
justify-content: center;
font-size: 11px;
line-height: 13px;
letter-spacing: 0.04em;


`;