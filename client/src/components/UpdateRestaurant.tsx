import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

export interface IUpdateRestaurant {}

const UpdateRestaurant: React.FC<IUpdateRestaurant> = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [name, setName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [priceRange, setPriceRange] = useState<string>("");

	useEffect(() => {
		const fetchData = async (id: string | undefined) => {
			const response = await RestaurantFinder.get(`/${id}`);
			setName(response.data.data.restaurant.name);
			setLocation(response.data.data.restaurant.location);
			setPriceRange(response.data.data.restaurant.price_range);
		};
		fetchData(id);
	}, [id]);

	const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const UpdateRestaurant = await RestaurantFinder.put(`/${id}`, {
			name,
			location,
			price_range: priceRange,
		});
		navigate("/");
		console.log(UpdateRestaurant);
	};

	return (
		<div>
			<form onSubmit={handleUpdate} action="">
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						id="name"
						className="form-control"
						type="text"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						id="location"
						className="form-control"
						type="text"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="price_range">Price Range</label>
					<input
						value={priceRange}
						onChange={(e) => setPriceRange(e.target.value)}
						id="price_range"
						className="form-control"
						type="number"
					/>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default UpdateRestaurant;
