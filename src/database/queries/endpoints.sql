-- Active: 1687288777261@@127.0.0.1@3306

-- Get All Users

SELECT * FROM users;

-- Get All Products (funcionalidade 1)

SELECT * FROM products;

-- Get all Products (funcionalidade 2)

SELECT * FROM products WHERE LOWER(name) LIKE LOWER('%GAMER%');

-- Create User

INSERT INTO
    users (
        id,
        name,
        email,
        password,
        created_at
    )
VALUES (
        "010",
        "Bart Silva",
        "bartsilva@gmail.com",
        "12345678",
        DATE('now')
    );

-- Create Product

INSERT INTO
    products (
        id,
        name,
        price,
        description,
        image_url
    )
VALUES (
        "010",
        "Water Cooler Ice",
        590,
        "Refrigeração Maxima",
        "https://picsum.photos/seed/Cooler%20gamer/400"
    );

-- Delete User by id
DELETE FROM users WHERE id = '010';

-- Delete Product by id
DELETE FROM products WHERE id = '011';

-- Edit Product by id
UPDATE products
SET
    id = '011',
    name = 'Cooler Ice',
    price = 1000.10,
    description = 'cooler refresca procesador',
    image_url = "https://picsum.photos/seed/Cooler%20cooler/400"
WHERE id = '010';