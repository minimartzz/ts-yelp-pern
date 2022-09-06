import React from "react";
import AddRestaurant from "../components/AddRestaurants";
import Header from "../components/Header";
import RestaurantList from "../components/RestaurantList";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	return (
		<div>
			<Header />
			<AddRestaurant />
			<RestaurantList />
		</div>
	);
};

export default Home;
