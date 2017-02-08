/* Set up table */
CREATE TABLE IF NOT EXISTS Products (
   id SERIAL PRIMARY KEY,
   name VARCHAR(50),
   description VARCHAR(400),
   price NUMERIC(10,2),
   imageUrl VARCHAR(400)
)
