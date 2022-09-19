import { useState } from "react";
import styled from "styled-components";





const borderSelecionado = "#1AAE9E";
const colorDisponivel = "#d5dee6";
const borderDisponivel = "#7B8B99";
const borderIndisponivel = "#99220f";



function SizeNumber ({id, isAvailable, number, setSelectedSize}){
    const [selecionar, setSelecionar] = useState(false);
    

    if (isAvailable === true) {
        return (
            <SizeModel id={id} color={colorDisponivel} border={selecionar ? borderSelecionado : borderDisponivel} onClick={() => {
                setSelectedSize(id)
                setSelecionar(!selecionar)
            }} >
                <h3>{number}</h3>
            </SizeModel>

        )
    } else {
        return (
            <SizeModel color={colorDisponivel} border={borderIndisponivel} onClick={() => alert("Este tamanho não está disponível")}>
                <h3>{number}</h3>
            </SizeModel>
        )
    }
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