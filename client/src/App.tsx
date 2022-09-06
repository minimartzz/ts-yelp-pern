import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantContextProvider from "./context/RestaurantContext";

// Pages
import Home from "./routes/Home";
import RestaurantDetails from "./routes/RestaurantDetailsPage";
import UpdatePage from "./routes/UpdatePage";

function App() {
	return (
		<RestaurantContextProvider>
			<div className="container">
				<Router>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="restaurants">
							<Route path=":id">
								<Route index element={<RestaurantDetails />} />
								<Route path="update" element={<UpdatePage />} />
							</Route>
						</Route>
					</Routes>
				</Router>
			</div>
		</RestaurantContextProvider>
	);
}

export default App;
