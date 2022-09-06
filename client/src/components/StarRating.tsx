import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularFaStar } from "@fortawesome/free-regular-svg-icons";

export interface IStarRating {
	rating: number;
}

const StarRating: React.FC<IStarRating> = (props) => {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < Math.floor(props.rating)) {
			stars.push(
				<FontAwesomeIcon icon={faStar} className="text-warning" />
			);
		} else if (i - props.rating > -1 && i - props.rating < 0) {
			stars.push(
				<FontAwesomeIcon
					icon={faStarHalfAlt}
					className="text-warning"
				/>
			);
		} else {
			stars.push(
				<FontAwesomeIcon
					icon={regularFaStar}
					className="text-warning"
				/>
			);
		}
	}
	return <>{stars}</>;
};

export default StarRating;
