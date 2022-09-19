import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function ProductLayer({ product }) {
	const navigate = useNavigate();
	return (
		<Wrapper onClick={() => navigate(`/${product._id}`)}>
			<img src={product.image} alt="" />

			<h3>{product.name}</h3>
			<SmallInfos>
				<p>
					R$ {(product.price / 100).toFixed(2).toString().replace(".", ",")}
				</p>
				<Ratio>
					<ion-icon name="star"></ion-icon>
					{product.ratio}
				</Ratio>
			</SmallInfos>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	border-radius: 10px;
	background-color: #f6f6f6;
	margin: 5px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		width: 156px;
		height: 150px;
		object-fit: cover;
		border-radius: 10px;
	}

	h3 {
		margin: 5px;
		font-weight: 300;
		font-size: 17px;
		line-height: 17px;
	}
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const SmallInfos = styled.div`
	margin: 5px;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		font-weight: 700;
		font-size: 14px;
		line-height: 15.62px;
	}
`;

const Ratio = styled.div`
	font-size: 15px;
	font-weight: 300;
	ion-icon {
		color: #ffc120;
	}
`;
