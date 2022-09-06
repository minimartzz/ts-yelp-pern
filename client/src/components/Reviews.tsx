import React from "react";
import { IClientReviews } from "../interfaces/clientInterfaces";
import StarRating from "./StarRating";

export interface IReviews {
	reviews: IClientReviews[];
}

const Reviews: React.FC<IReviews> = ({ reviews }) => {
	console.log(reviews);
	return (
		<div>
			{reviews.map((review) => {
				return (
					<div className="row row-cols-3 mb-2" key={review.id}>
						<div
							className="card text-bg-primary mb-3"
							style={{ maxWidth: "30%" }}
						>
							<div className="card-header d-flex justify-content-between">
								<span>{review.name}</span>
								<span>
									<StarRating rating={review.rating} />
								</span>
							</div>
							<div className="card-body">
								<p className="card-text">{review.review}</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Reviews;
