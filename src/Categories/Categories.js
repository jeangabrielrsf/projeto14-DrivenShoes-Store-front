import React from "react";
import styled from "styled-components";
export default function Categories({ category }) {
	return <Box>{category.replace(category[0], category[0].toUpperCase())}</Box>;
}

const Box = styled.div`
	font-size: 20px;
	color: #0acf83;
	border-bottom: 1px solid #0acf83;
	border-top: 1px solid #0acf83;
	padding: 5px;
`;
