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
	const { loading, error, data } = useQuery(COLLECTIONS);
	const [categories, setCategories] = useState({});

	console.log(data);
	return (
		<CategoriesContext.Provider
			value={{
				categories,
				setCategories,
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
