interface IRestaurants {
	id: number;
	name: string;
	location: string;
	price_range: number;
}

interface IReviews {
	id: number;
	restaurant_id: number;
	name: string;
	review: string;
	rating: number;
}

export { IRestaurants, IReviews };
