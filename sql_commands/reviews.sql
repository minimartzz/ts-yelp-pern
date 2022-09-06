CREATE TABLE reviews (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	restaurant_id BIGINT NOT NULL,
	name VARCHAR(50) NOT NULL,
	review TEXT NOT NULL,
	rating INT NOT NULL CHECK(rating >= 1 and rating <= 5)
);

INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1, 'John', 'Great restaurants', 5); 
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1, 'Kenneth', 'Not bad', 4); 
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (1, 'Guanhua', 'Meh', 2); 
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (2, 'Sriram', 'Dam gotta get in a quick f45 workour right after this', 2); 
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (2, 'Jameela', 'Ehhh this place has quite good food', 4); 
INSERT INTO reviews (restaurant_id, name, review, rating) VALUES (2, 'Tze Eng', 'My friends restaurant', 3); 
