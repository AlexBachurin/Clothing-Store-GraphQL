import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { useParams } from "react-router-dom";
import { useCategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
const CategoryPage = () => {
	//get target url with clicked category name using useParams
	const { categoryName } = useParams();
	const { categories } = useCategoriesContext();
	//state for storing products
	const [products, setProducts] = useState([]);
	//every time categoryName or categories from db changes call useEffect to rerender page
	useEffect(() => {
		//first find in categories array item with matching category name
		const filteredArr = categories.filter((item) => {
			return item.title.toLowerCase() === categoryName.toLowerCase();
		});
		//then set items of found matching categories items to products
		setProducts(filteredArr[0].items);
	}, [categoryName, categories]);
	return (
		<Wrapper>
			<h2 className="category-title">{categoryName}</h2>
			<div className="category-items-container">
				{products &&
					products.map((product) => {
						return <ProductCard key={product.id} {...product} />;
					})}
			</div>
		</Wrapper>
	);
};

export default CategoryPage;
