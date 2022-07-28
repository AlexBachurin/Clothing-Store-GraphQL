import React, { useState, useEffect, useContext } from "react";
import { gql, useQuery } from "@apollo/client";

const CategoriesContext = React.createContext();

//query to get collections
const COLLECTIONS = gql`
	query GetCollections {
		collections {
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

export const CategoriesProvider = ({ children }) => {
	//execute our query

	const [categories, setCategories] = useState([]);
	const { loading, error, data } = useQuery(COLLECTIONS);

	useEffect(() => {
		console.log(data);
		if (data) {
			const { collections } = data;
			setCategories(collections);
		}
	}, [data]);
	return (
		<CategoriesContext.Provider
			value={{
				categories,
				setCategories,
				loading,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};

//global hook
export const useCategoriesContext = () => {
	return useContext(CategoriesContext);
};
