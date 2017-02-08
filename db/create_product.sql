INSERT INTO Products (name, description, price, imageUrl)
VALUES ($1, $2, $3, $4)
RETURNING *;
