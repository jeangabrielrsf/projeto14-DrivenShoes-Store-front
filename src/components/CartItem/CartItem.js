import styled from "styled-components";

export default function CartItem({ item }) {
	return (
		<Wrapper>
			<ItemImage>
				<img src={item.image} alt="" />
			</ItemImage>
			<ItemInfo>
				<h2>{item.name}</h2>
				<p>{item.price}</p>
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
`;

const ItemImage = styled.div`
	width: 133px;
	height: 137px;
	img {
		width: 133px;
		height: 137px;
		object-fit: cover;
	}
`;

const ItemInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

const ItemRatio = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
