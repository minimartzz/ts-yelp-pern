import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";
import { AppContext } from "../context/RestaurantContext";
import {
	RestaurantsAPIResponse,
	IRestaurantInfo,
} from "../interfaces/clientInterfaces";
import StarRating from "./StarRating";

export interface RestaurantListProps {}

const RestaurantList: React.FC<RestaurantListProps> = () => {
	const { restaurants, setRestaurants } = useContext(AppContext);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = (await RestaurantFinder.get("/"))
					.data as RestaurantsAPIResponse;
				setRestaurants(response.data.restaurant);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, [setRestaurants]);

	const handleUpdate = (e: React.MouseEvent<HTMLElement>, id: number) => {
		e.stopPropagation();
		navigate(`/restaurants/${id}/update`);
	};

	const handleRestaurantSelect = (id: number) => {
		navigate(`/restaurants/${id}`);
	};

	const handleDelete = (e: React.MouseEvent<HTMLElement>, id: number) => {
		e.stopPropagation();
		try {
			const response = RestaurantFinder.delete(`/${id}`);
			setRestaurants(
				restaurants.filter((restaurant: IRestaurantInfo) => {
					return restaurant.id !== id;
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	const renderRating = (restaurant: IRestaurantInfo) => {
		if (!restaurant.count) {
			return <span className="text-warning">0 reviews</span>;
		}

		return (
			<>
				<StarRating rating={parseFloat(restaurant.average_rating)} />
				<span className="text-warning ml-1">({restaurant.count})</span>
			</>
		);
	};

	return (
		<div>
			<table className="table table-hover table-dark">
				<thead>
					<tr className="bg-primary">
						<th scope="col">Restaurant</th>
						<th scope="col">Location</th>
						<th scope="col">Price Range</th>
						<th scope="col">Ratings</th>
						<th scope="col">Edit</th>
						<th scope="col">Delete</th>
					</tr>
				</thead>
				<tbody>
					{restaurants &&
						restaurants.map((restaurant: IRestaurantInfo) => {
							return (
								<tr
									onClick={() =>
										handleRestaurantSelect(restaurant.id)
									}
									key={restaurant.id}
								>
									<td>{restaurant.name}</td>
									<td>{restaurant.location}</td>
									<td>
										{"$".repeat(restaurant.price_range)}
									</td>
									<td>{renderRating(restaurant)}</td>
									<td>
										<button
											onClick={(e) =>
												handleUpdate(e, restaurant.id)
											}
											className="btn btn-warning"
										>
											Update
										</button>
									</td>
									<td>
										<button
											onClick={(e) =>
												handleDelete(e, restaurant.id)
											}
											className="btn btn-danger"
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
				</tbody>
			</table>
		</div>
	);
};

export default RestaurantList;
