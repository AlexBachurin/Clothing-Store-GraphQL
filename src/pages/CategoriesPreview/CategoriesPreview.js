import React from "react";
import { useCategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Wrapper from "./Wrapper";
const CategoriesPreview = () => {
	const { categories, loading } = useCategoriesContext();

	return (
		<Wrapper>
			{loading
				? "Loading..."
				: categories.map((item) => {
						const { title, items } = item;
						return (
							<CategoryPreview key={title} title={title} products={items} />
						);
				  })}
		</Wrapper>
	);
};

export default CategoriesPreview;
