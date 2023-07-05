-- Active: 1687985930160@@127.0.0.1@3306
CREATE TABLE IF NOT EXISTS users(  
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL

);
DROP TABLE users;

INSERT INTO users (id, name, email, password, created_at)
VALUES 
("001","Anonimo", "anonimo@gmail.com","123456@aZ",DATETIME('now','localtime')),
("002","Ciclano", "ciclano@gmail.com","123456@cZ",DATETIME('now','localtime')),
("003","Beltana", "beltrana@gmail.com","123456@bZ",DATETIME('now','localtime')),
("004","Anônima", "anomima@gmail.com","123456@aN",DATETIME('now','localtime'));

SELECT * FROM users;

CREATE TABLE IF NOT EXISTS products(
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL
);

DROP TABLE products;
    
INSERT INTO products (id, name, price, description, image_url)
VALUES
("001","Teclado Gamer Flash", 102,"Melhor teclado Game", "https://picsum.photos/seed/Mouse%20gamer/400"),
("002","Mouse Gamer Flash", 50,"Melhor mouse Game", "https://picsum.photos/seed/Mouse%20gamer/400"),
("003","CPU Gamer Flash", 900,"CPU core I20","https://picsum.photos/seed/Mouse%20gamer/400"),
("004","Caixa Som", 88,"Modelo Power Game","https://picsum.photos/seed/Mouse%20gamer/400"),
("005","TV 50 polegadas", 3500,"Com PIP, Smart TV","https://picsum.photos/seed/Mouse%20gamer/400");

SELECT * FROM products;

-- Criação da Tabela de Pedidos
-- Create table purchases


-- Criação da tabela de pedidos
-- create table purchases

CREATE TABLE IF NOT EXISTS purchases(
  id TEXT PRIMARY KEY NOT NULL,
  buyer TEXT NOT NULL,
  total_price REAL NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (buyer) REFERENCES users(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

INSERT INTO purchases ( id, buyer, total_price, created_at)
VALUES ("101","001",204, DATETIME('now', 'localtime')),
       ("102","002",900, DATETIME('now', 'localtime')),
       ("103","004",3500, DATETIME('now', 'localtime'));

SELECT 
  purchases.id,
  purchases.buyer,
  users.id AS idUser
  users.name as userName,
  users.email,
  purchases.total_price AS TotalPrice,
  purchases.created_at As Date
  FROM purchases
  INNER JOIN users ON buyer = users.id;

 UPDATE purchases
 SET total_price = 1254.32
 WHERE id = "10001";


CREATE TABLE IF NOT EXISTS purchases_products(
  purchase_id TEXT NOT NULL,
  product_id TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (purchase_id) REFERENCES purchases(id)
  ON UPDATE CASCADE 
  ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id)
  ON UPDATE CASCADE  
);
DROP TABLE purchases_products;

INSERT INTO purchases_products ( purchase_id, product_id, quantity )
VALUES  ("101","001",2),
        ("101","003",1),
        ("103","005",1);

SELECT 
  purchases.id AS purchaseId,
  purchases.buyer,
  purchases.total_price AS TotalPrice,
  purchases.created_at AS createdAt,
  users.name AS nameUser,
  purchases_products.product_id AS productId,
  products.name AS productName,
  purchases_products.quantity
  from purchases_products
  INNER JOIN purchases ON purchases.id = purchases_products.purchase_id
  INNER JOIN products ON products.id = purchases_products.product_id
  INNER JOIN users ON purchases.buyer = users.id; 

