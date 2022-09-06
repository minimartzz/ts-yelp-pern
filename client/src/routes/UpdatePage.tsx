import React from "react";
import UpdateRestaurant from "../components/UpdateRestaurant";

export interface UpdatePageProps {}

const UpdatePage: React.FC<UpdatePageProps> = () => {
	return (
		<div>
			<h1 className="text-centre">Update Restaurants</h1>
			<UpdateRestaurant />
		</div>
	);
};

export default UpdatePage;
