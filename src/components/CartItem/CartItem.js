import styled from "styled-components";

export default function CartItem({ item }) {
	return (
		<Wrapper>
			<ItemImage>
				<img src={item.image} alt="" />
			</ItemImage>
			<ItemInfo>
				<h2>{item.name}</h2>
				<p>R$ {(item.price / 100).toFixed(2).toString().replace(".", ",")}</p>
				Quantidade: {item.counter}
				<ItemRatio>
					<ion-icon name="star"></ion-icon>
					{item.ratio}
				</ItemRatio>
			</ItemInfo>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	background-color: #f6f6f6;
	border-radius: 5px;
	filter: box-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	margin: 10px 0px;
`;

const ItemImage = styled.div`
	width: 133px;
	height: 137px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 90%;
		height: 90%;
		object-fit: cover;
		border-radius: 8px;
	}
`;

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 20px;
		font-weight: 300;
		line-height: 25px;
	}
	p {
		font-weight: 700;
		font-size: 18px;
		line-height: 24px;
	}
`;

const ItemRatio = styled.div`
	display: flex;
	align-items: center;
	font-size: 18px;
	font-weight: 300;

	ion-icon {
		color: #ffc120;
		font-size: 20px;
	}
`;
