SET FOREIGN_KEY_CHECKS=0;
DROP DATABASE IF EXISTS e_store;
CREATE DATABASE IF NOT EXISTS e_store;

-- GRANT SELECT,CREATE,ALTER ON e_store.* TO ''@'localhost';

CREATE TABLE e_store.products (
	id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	price FLOAT(8,2) NOT NULL DEFAULT 00.00,
	stock INT(3) UNSIGNED NOT NULL DEFAULT 0,
	created_at DATETIME NOT NULL,
	PRIMARY KEY (id)
) AUTO_INCREMENT = 1;

-- CREATE TABLE e_store.users (
-- 	id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
-- 	username VARCHAR(255) NOT NULL,
-- 	PRIMARY KEY (id)
-- ) AUTO_INCREMENT = 1;

CREATE TABLE e_store.reviews (
	id INT(3) UNSIGNED NOT NULL AUTO_INCREMENT,
	product_id INT(3) UNSIGNED NOT NULL,
	stars TINYINT(1) UNSIGNED NOT NULL DEFAULT 1,
	PRIMARY KEY (id),
	FOREIGN KEY (product_id) REFERENCES e_store.products(id)
) AUTO_INCREMENT = 1;

INSERT INTO e_store.products (name, price, stock, created_at)
VALUES 
("Tablet", 145.50, 8, "2015-10-09 00:49:30"),
("Smartphone", 90.80, 9, "2015-10-28 04:43:05"),
("PC", 157.40, 1, "2015-10-10 18:13:09"),
("Headphones", 20.00, 6, "2015-10-30 06:30:30"),
("Speakers", 56.89, 4, "2015-10-27 12:24:56"),
("Monitor", 125.45, 7, "2015-10-22 11:32:53");

-- INSERT INTO e_store.users (username) 
-- VALUES 
-- ("Richardson"),
-- ("Case"),
-- ("Green"),
-- ("Avery"),
-- ("Johnson");

INSERT INTO e_store.reviews (product_id, stars)
VALUES 
(6, 5),
(4, 2),
(2, DEFAULT),
(4, 5),
(1, 5),
(2, 4),
(3, 3),
(2, 2),
(1, 3);


SET FOREIGN_KEY_CHECKS=1;