import dotenv from "dotenv";
import express, { Express, Request, Response, NextFunction } from "express";
import { QueryResult } from "pg";
import db from "./db";
var cors = require("cors");
dotenv.config();

// Interfaces
import { IRestaurants, IReviews } from "./interfaces/db_interfaces";

const app: Express = express();
const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
	res.send("Express + Typescript Server RUNNING");
});

app.use(cors());
app.use(express.json());

app.get("/api/v1/restaurants", async (req: Request, res: Response) => {
	try {
		// const dbquery: QueryResult = await db.query(
		// 	"SELECT * FROM restaurants;"
		// );
		const restaurantsRatings = await db.query(
			"SELECT * \
			FROM restaurants \
			LEFT JOIN ( SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating \
			FROM reviews \
			GROUP BY restaurant_id) reviews \
			ON restaurants.id = reviews.restaurant_id;"
		);
		const result = restaurantsRatings.rows;
		res.status(200).json({
			status: "success",
			length: restaurantsRatings.rows.length,
			data: {
				restaurant: result,
			},
		});
	} catch (error) {
		res.status(500);
		console.log("[500] Unable to GET all restaurants");
	}
});

// Get single restaurant
app.get("/api/v1/restaurants/:id", async (req: Request, res: Response) => {
	try {
		const dbquery: QueryResult = await db.query(
			"SELECT * \
			FROM restaurants \
			LEFT JOIN ( SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating \
			FROM reviews \
			GROUP BY restaurant_id) reviews \
			ON restaurants.id = reviews.restaurant_id \
			WHERE id = $1",
			[req.params.id]
		);
		const result: IRestaurants = dbquery.rows[0];

		const reviewsQuery: QueryResult = await db.query(
			"SELECT * FROM reviews WHERE restaurant_id = $1",
			[req.params.id]
		);
		const reviewsResults: IReviews[] = reviewsQuery.rows;

		res.status(200).json({
			status: "success",
			length: 1,
			data: {
				restaurant: result,
				reviews: reviewsResults,
			},
		});
	} catch (error) {
		res.status(500);
		console.log("[500] Unable to GET single restaurant");
	}
});

// Create new restaurant
app.post("/api/v1/restaurants", async (req: Request, res: Response) => {
	try {
		const dbquery: QueryResult = await db.query(
			"INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;",
			[req.body.name, req.body.location, req.body.price_range]
		);
		const result: IRestaurants = dbquery.rows[0];
		res.status(200).json({
			status: "success",
			length: 1,
			data: {
				restaurant: result,
			},
		});
	} catch (error) {
		res.status(500);
		console.log("[500] Failed to INSERT new entry");
	}
});

// Update restaurants
app.put("/api/v1/restaurants/:id", async (req: Request, res: Response) => {
	try {
		const dbquery: QueryResult = await db.query(
			"UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 RETURNING *;",
			[
				req.body.name,
				req.body.location,
				req.body.price_range,
				req.params.id,
			]
		);
		const result: IRestaurants = dbquery.rows[0];
		res.status(200).json({
			status: "success",
			length: 1,
			data: {
				restaurant: result,
			},
		});
	} catch (error) {
		res.status(500);
		console.log("[500] Failed to UPDATE an entry");
	}
});

// Delete restaurants
app.delete("/api/v1/restaurants/:id", async (req: Request, res: Response) => {
	try {
		const dbquery: QueryResult = await db.query(
			"DELETE FROM restaurants WHERE id=$1",
			[req.params.id]
		);
		res.status(204).json({
			// note for 204 Postman will remove the body automatically
			status: "success",
			message: `Restaurant with id: ${req.params.id} has been deleted`,
		});
	} catch (error) {
		res.status(500);
		console.log("[500] Failed to DELETE an entry");
	}
});

// Create new review for a restaurant
app.post(
	"/api/v1/restaurants/:id/addReview",
	async (req: Request, res: Response) => {
		try {
			const dbquery: QueryResult = await db.query(
				"INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *;",
				[req.params.id, req.body.name, req.body.review, req.body.rating]
			);
			const result: IReviews = dbquery.rows[0];
			res.status(200).json({
				status: "success",
				length: 1,
				data: {
					restaurant: result,
				},
			});
		} catch (error) {
			res.status(500);
			console.log("[500] Failed to INSERT new entry");
		}
	}
);

app.listen(port, () => {
	console.log(`[Server⚡] Server started at https://localhost:${port}`);
});
