import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import AddReview from "../components/AddReview";
import Reviews from "../components/Reviews";
import StarRating from "../components/StarRating";
import { AppContext } from "../context/RestaurantContext";

export interface RestaurantDetailsProps {}

const RestaurantDetails: React.FC<RestaurantDetailsProps> = () => {
	const { id } = useParams();
	const { selectedRestaurant, setSelectedRestaurant } =
		useContext(AppContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await RestaurantFinder.get(`/${id}`);
				setSelectedRestaurant(response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [id, setSelectedRestaurant]);

	console.log(Object.keys(selectedRestaurant).length === 0);

	return (
		<div>
			{Object.keys(selectedRestaurant).length === 0 ? (
				<div>No data found</div>
			) : (
				<>
					<h1 className="text-center display-1">
						{selectedRestaurant.restaurant.name}
					</h1>
					<div className="text-center">
						<StarRating
							rating={
								selectedRestaurant.restaurant.average_rating
							}
						/>
						<span className="text-warning">
							{selectedRestaurant.restaurant.count
								? `(${selectedRestaurant.restaurant.count})`
								: "No reviews"}
						</span>
					</div>
					<div className="mt-3">
						<Reviews reviews={selectedRestaurant.reviews} />
					</div>
					<AddReview />
				</>
			)}
		</div>
	);
};

export default RestaurantDetails;
