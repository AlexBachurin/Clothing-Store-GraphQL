import React from "react";
import "./cartIcon.styles.scss";
import { ReactComponent as Icon } from "../../assets/cart-icon.svg";

const CartIcon = ({ handleOpenCart }) => {
	return (
		<div onClick={handleOpenCart} className="cart-icon-container">
			<Icon className="cart-icon" />
			<span className="cart-count">0</span>
		</div>
	);
};

export default CartIcon;