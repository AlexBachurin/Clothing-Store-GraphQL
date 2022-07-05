import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	width: 240px;
	height: auto;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	.empty-message {
		font-size: 18px;
		margin: 50px auto;
	}

	.cart-items {
		height: 240px;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
	}

	button {
		margin-top: auto;
	}
`;

export default Wrapper;