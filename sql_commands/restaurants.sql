create table restaurants (
	id BIGSERIAL NOT NULL,
	name VARCHAR(50) NOT NULL,
	location VARCHAR(50) NOT NULL,
	price_range INT NOT NULL CHECK(price_range >= 1 AND price_range <= 5)
);
insert into restaurants (id, name, location, price_range) values (1, 'Collins, Gulgowski and Roberts', 'Texas', 1);
insert into restaurants (id, name, location, price_range) values (2, 'Considine, Schumm and Green', 'Virginia', 5);
insert into restaurants (id, name, location, price_range) values (3, 'Raynor Inc', 'Maryland', 1);
insert into restaurants (id, name, location, price_range) values (4, 'Effertz-Dooley', 'Texas', 2);
insert into restaurants (id, name, location, price_range) values (5, 'Abshire-Gusikowski', 'Louisiana', 5);
insert into restaurants (id, name, location, price_range) values (6, 'Stiedemann, Leannon and Grant', 'Pennsylvania', 5);
insert into restaurants (id, name, location, price_range) values (7, 'Daniel Inc', 'Texas', 1);
insert into restaurants (id, name, location, price_range) values (8, 'Christiansen, Doyle and Luettgen', 'Colorado', 5);
insert into restaurants (id, name, location, price_range) values (9, 'Corkery-O''Hara', 'Massachusetts', 4);
insert into restaurants (id, name, location, price_range) values (10, 'Bins-Nienow', 'Arizona', 1);
insert into restaurants (id, name, location, price_range) values (11, 'Beier Group', 'Indiana', 4);
insert into restaurants (id, name, location, price_range) values (12, 'Larkin, Goodwin and Jenkins', 'Nevada', 1);
insert into restaurants (id, name, location, price_range) values (13, 'Doyle Group', 'North Carolina', 4);
insert into restaurants (id, name, location, price_range) values (14, 'Sauer, Johnson and Johns', 'New York', 4);
insert into restaurants (id, name, location, price_range) values (15, 'Kassulke LLC', 'Florida', 5);
insert into restaurants (id, name, location, price_range) values (16, 'Johnston LLC', 'California', 3);
insert into restaurants (id, name, location, price_range) values (17, 'Stroman and Sons', 'Minnesota', 2);
insert into restaurants (id, name, location, price_range) values (18, 'Hirthe-Klocko', 'Florida', 4);
insert into restaurants (id, name, location, price_range) values (19, 'Krajcik Group', 'Wisconsin', 4);
insert into restaurants (id, name, location, price_range) values (20, 'Mohr, Reynolds and McKenzie', 'Arizona', 3);
insert into restaurants (id, name, location, price_range) values (21, 'Block-Kulas', 'Minnesota', 3);
insert into restaurants (id, name, location, price_range) values (22, 'Buckridge Group', 'Texas', 4);
insert into restaurants (id, name, location, price_range) values (23, 'Glover-Wolf', 'Virginia', 5);
insert into restaurants (id, name, location, price_range) values (24, 'Will, Hansen and Nienow', 'Minnesota', 1);
insert into restaurants (id, name, location, price_range) values (25, 'Barrows-Mayer', 'Kentucky', 5);
insert into restaurants (id, name, location, price_range) values (26, 'Metz-Aufderhar', 'Pennsylvania', 5);
insert into restaurants (id, name, location, price_range) values (27, 'Bechtelar-Kohler', 'District of Columbia', 2);
insert into restaurants (id, name, location, price_range) values (28, 'Heathcote Group', 'Pennsylvania', 4);
insert into restaurants (id, name, location, price_range) values (29, 'Bosco-Boyle', 'New Mexico', 3);
insert into restaurants (id, name, location, price_range) values (30, 'Wuckert LLC', 'District of Columbia', 2);
insert into restaurants (id, name, location, price_range) values (31, 'Erdman and Sons', 'New York', 1);
insert into restaurants (id, name, location, price_range) values (32, 'Will, Walsh and Heathcote', 'Louisiana', 1);
insert into restaurants (id, name, location, price_range) values (33, 'Kassulke-Schumm', 'Illinois', 1);
insert into restaurants (id, name, location, price_range) values (34, 'Parker, Farrell and Zieme', 'North Carolina', 3);
insert into restaurants (id, name, location, price_range) values (35, 'Grant LLC', 'Texas', 3);
insert into restaurants (id, name, location, price_range) values (36, 'Price Inc', 'Texas', 1);
insert into restaurants (id, name, location, price_range) values (37, 'Langworth Group', 'Texas', 4);
insert into restaurants (id, name, location, price_range) values (38, 'Leffler-Balistreri', 'Tennessee', 3);
insert into restaurants (id, name, location, price_range) values (39, 'Conn LLC', 'District of Columbia', 5);
insert into restaurants (id, name, location, price_range) values (40, 'Stamm Group', 'Pennsylvania', 5);
insert into restaurants (id, name, location, price_range) values (41, 'Rau Inc', 'Connecticut', 3);
insert into restaurants (id, name, location, price_range) values (42, 'Botsford and Sons', 'Oklahoma', 4);
insert into restaurants (id, name, location, price_range) values (43, 'McDermott, Romaguera and Yundt', 'Florida', 2);
insert into restaurants (id, name, location, price_range) values (44, 'Schumm-Glover', 'Ohio', 1);
insert into restaurants (id, name, location, price_range) values (45, 'Keeling, Hayes and Braun', 'California', 1);
insert into restaurants (id, name, location, price_range) values (46, 'Dare, Labadie and Denesik', 'Pennsylvania', 5);
insert into restaurants (id, name, location, price_range) values (47, 'Harber Group', 'District of Columbia', 4);
insert into restaurants (id, name, location, price_range) values (48, 'Kuhlman, Schowalter and Mueller', 'Texas', 5);
insert into restaurants (id, name, location, price_range) values (49, 'Gottlieb, Oberbrunner and Feeney', 'California', 2);
insert into restaurants (id, name, location, price_range) values (50, 'Collier-Greenfelder', 'Arizona', 1);
