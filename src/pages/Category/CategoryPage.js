import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { gql, useQuery } from "@apollo/client";

//query to get single collection by title
const GET_CATEGORY = gql`
	query ($title: String!) {
		getCollectionsByTitle(title: $title) {
			id
			title
			items {
				id
				name
				price
				imageUrl
			}
		}
	}
`;

const CategoryPage = () => {
	//get target url with clicked category name using useParams
	const { categoryName } = useParams();
	//state for storing products for single item
	const [products, setProducts] = useState([]);
	//get single collection by using query and passing title of clicked category name to it
	const { loading, data, error } = useQuery(GET_CATEGORY, {
		variables: {
			title: categoryName,
		},
	});
	//every time categoryName or data from db changes call useEffect to rerender page
	useEffect(() => {
		if (data) {
			const items = data.getCollectionsByTitle.items;
			setProducts(items);
		}
	}, [categoryName, data]);
	return (
		<Wrapper>
			<h2 className="category-title">{categoryName}</h2>
			<div className="category-items-container">
				{loading
					? "Loading..."
					: products &&
					  products.map((product) => {
							return <ProductCard key={product.id} {...product} />;
					  })}
			</div>
		</Wrapper>
	);
};

export default CategoryPage;
