"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db"));
var cors = require("cors");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("Express + Typescript Server RUNNING");
});
app.use(cors());
app.use(express_1.default.json());
app.get("/api/v1/restaurants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const dbquery: QueryResult = await db.query(
        // 	"SELECT * FROM restaurants;"
        // );
        const restaurantsRatings = yield db_1.default.query("SELECT * \
			FROM restaurants \
			LEFT JOIN ( SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating \
			FROM reviews \
			GROUP BY restaurant_id) reviews \
			ON restaurants.id = reviews.restaurant_id;");
        const result = restaurantsRatings.rows;
        res.status(200).json({
            status: "success",
            length: restaurantsRatings.rows.length,
            data: {
                restaurant: result,
            },
        });
    }
    catch (error) {
        res.status(500);
        console.log("[500] Unable to GET all restaurants");
    }
}));
// Get single restaurant
app.get("/api/v1/restaurants/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbquery = yield db_1.default.query("SELECT * \
			FROM restaurants \
			LEFT JOIN ( SELECT restaurant_id, COUNT(*), TRUNC(AVG(rating), 1) AS average_rating \
			FROM reviews \
			GROUP BY restaurant_id) reviews \
			ON restaurants.id = reviews.restaurant_id \
			WHERE id = $1", [req.params.id]);
        const result = dbquery.rows[0];
        const reviewsQuery = yield db_1.default.query("SELECT * FROM reviews WHERE restaurant_id = $1", [req.params.id]);
        const reviewsResults = reviewsQuery.rows;
        res.status(200).json({
            status: "success",
            length: 1,
            data: {
                restaurant: result,
                reviews: reviewsResults,
            },
        });
    }
    catch (error) {
        res.status(500);
        console.log("[500] Unable to GET single restaurant");
    }
}));
// Create new restaurant
app.post("/api/v1/restaurants", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbquery = yield db_1.default.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *;", [req.body.name, req.body.location, req.body.price_range]);
        const result = dbquery.rows[0];
        res.status(200).json({
            status: "success",
            length: 1,
            data: {
                restaurant: result,
            },
        });
    }
    catch (error) {
        res.status(500);
        console.log("[500] Failed to INSERT new entry");
    }
}));
// Update restaurants
app.put("/api/v1/restaurants/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbquery = yield db_1.default.query("UPDATE restaurants SET name=$1, location=$2, price_range=$3 WHERE id=$4 RETURNING *;", [
            req.body.name,
            req.body.location,
            req.body.price_range,
            req.params.id,
        ]);
        const result = dbquery.rows[0];
        res.status(200).json({
            status: "success",
            length: 1,
            data: {
                restaurant: result,
            },
        });
    }
    catch (error) {
        res.status(500);
        console.log("[500] Failed to UPDATE an entry");
    }
}));
// Delete restaurants
app.delete("/api/v1/restaurants/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbquery = yield db_1.default.query("DELETE FROM restaurants WHERE id=$1", [req.params.id]);
        res.status(204).json({
            // note for 204 Postman will remove the body automatically
            status: "success",
            message: `Restaurant with id: ${req.params.id} has been deleted`,
        });
    }
    catch (error) {
        res.status(500);
        console.log("[500] Failed to DELETE an entry");
    }
}));
// Create new review for a restaurant
app.post("/api/v1/restaurants/:id/addReview", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dbquery = yield db_1.default.query("INSERT INTO reviews (restaurant_id, name, review, rating) VALUES ($1, $2, $3, $4) RETURNING *;", [req.params.id, req.body.name, req.body.review, req.body.rating]);
        const result = dbquery.rows[0];
        res.status(200).json({
            status: "success",
            length: 1,
            data: {
                restaurant: result,
            },
        });
    }
    catch (error) {
        res.status(500);
        console.log("[500] Failed to INSERT new entry");
    }
}));
app.listen(port, () => {
    console.log(`[Server⚡] Server started at https://localhost:${port}`);
});
