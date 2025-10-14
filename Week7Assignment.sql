DROP TABLE IF EXISTS Rentals;
DROP TABLE IF EXISTS Customers;

CREATE TABLE Customers (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  membership_level TEXT NOT NULL
);

CREATE TABLE Rentals (
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  movie_title TEXT NOT NULL,
  rental_price REAL NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES Customers(id)
);

INSERT INTO Customers (id, name, membership_level) VALUES
  (1, 'Ava Johnson', 'Basic'),
  (2, 'Liam Carter', 'Standard'),
  (3, 'Maya Patel', 'Premium'),
  (4, 'Noah Thompson', 'Standard'),
  (5, 'Sophia Martinez', 'Premium');

INSERT INTO Rentals (id, customer_id, movie_title, rental_price) VALUES
  (101, 1, 'The Grand Heist', 3.99),
  (102, 2, 'Starlight Odyssey', 4.49),
  (103, 3, 'Code of Shadows', 5.00),
  (104, 3, 'Quantum Road', 2.99),
  (105, 5, 'Hidden Harbor', 3.50);

SELECT * FROM Customers;
SELECT * FROM Rentals;
SELECT name, membership_level FROM Customers;
SELECT movie_title, rental_price FROM Rentals;
SELECT r.id AS rental_id, c.name AS customer_name, c.membership_level, r.movie_title, r.rental_price
FROM Rentals r
JOIN Customers c ON r.customer_id = c.id
ORDER BY r.id;
