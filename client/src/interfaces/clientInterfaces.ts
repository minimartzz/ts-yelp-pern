interface RestaurantsAPIResponse {
	status: string;
	length: number;
	data: {
		restaurant: {
			id: number;
			name: string;
			location: string;
			price_range: number;
		}[];
	};
}

interface IRestaurantInfo {
	id: number;
	name: string;
	location: string;
	price_range: number;
	average_rating: string;
	count: string;
	restaurant_id: string;
}

interface IClientReviews {
	id: number;
	restaurant_id: number;
	name: string;
	review: string;
	rating: number;
}

export type { RestaurantsAPIResponse, IRestaurantInfo, IClientReviews };
