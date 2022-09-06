import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { AppContext } from "../context/RestaurantContext";

interface AddRestaurantProps {}

const AddRestaurant: React.FC<AddRestaurantProps> = () => {
	const { addRestaurant } = useContext(AppContext);
	const [name, setName] = useState<string>("");
	const [location, setLocation] = useState<string>("");
	const [priceRange, setPriceRange] = useState<string>("price range");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const response = await RestaurantFinder.post("/", {
				name,
				location,
				price_range: priceRange,
			});
			addRestaurant(response.data.data);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="mb-4">
			<form onSubmit={handleSubmit} action="">
				<div className="form-row">
					<div className="col">
						<input
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							type="text"
							className="form-control"
							placeholder="name"
						/>
					</div>
					<div className="col">
						<input
							value={location}
							onChange={(e) => {
								setLocation(e.target.value);
							}}
							type="text"
							className="form-control"
							placeholder="location"
						/>
					</div>
					<div className="col">
						<select
							name="custom-select my-1 mr-sm-2"
							value={priceRange}
							onChange={(e) => {
								setPriceRange(e.target.value);
							}}
						>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
							<option value="5">$$$$$</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddRestaurant;
