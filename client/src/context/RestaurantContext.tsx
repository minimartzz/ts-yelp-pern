import React, { useState, createContext, ReactNode } from "react";

export interface IRestaurantContext {
	id: number;
	name: string;
	location: string;
	price_range: number;
}

export const AppContext = createContext<any>(null);

const RestaurantContextProvider: React.FC<{ children: ReactNode }> = (
	props
) => {
	const [restaurants, setRestaurants] = useState<IRestaurantContext[]>(
		[] as IRestaurantContext[]
	);

	const addRestaurant = (restaurant: IRestaurantContext) => {
		setRestaurants([...restaurants, restaurant]);
	};

	const [selectedRestaurant, setSelectedRestaurant] =
		useState<IRestaurantContext>({} as IRestaurantContext);

	return (
		<AppContext.Provider
			value={{
				restaurants,
				setRestaurants,
				addRestaurant,
				selectedRestaurant,
				setSelectedRestaurant,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default RestaurantContextProvider;
