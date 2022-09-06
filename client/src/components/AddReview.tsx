import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RestaurantFinder from "../apis/RestaurantFinder";

export interface IAddReview {}

const AddReview: React.FC<IAddReview> = () => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const [name, setName] = useState<string>("");
	const [reviewText, setReviewText] = useState<string>("");
	const [rating, setRating] = useState<string>("Rating");

	const handleAddReview = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const reviewAdded = await RestaurantFinder.post(
				`/${id}/addReview`,
				{
					name,
					review: reviewText,
					rating,
				}
			);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="mb-2">
			<form action="" onSubmit={handleAddReview}>
				<div className="form-row">
					<div className="form-group col-8">
						<label htmlFor="name">Name</label>
						<input
							id="name"
							placeholder="name"
							type="text"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="form-group col-4">
						<label htmlFor="rating">Rating</label>
						<select
							id="rating"
							className="custom-select"
							value={rating}
							onChange={(e) => setRating(e.target.value)}
						>
							<option disabled>Rating</option>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="Review">Review</label>
					<textarea
						id="Review"
						className="form-control"
						value={reviewText}
						onChange={(e) => setReviewText(e.target.value)}
					></textarea>
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default AddReview;
