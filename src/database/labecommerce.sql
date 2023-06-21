-- Active: 1687288777261@@127.0.0.1@3306
CREATE TABLE users(  
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL

);
DROP TABLE users;

INSERT INTO users (id, name, email, password, created_at)
VALUES 
("001","Anonimo", "anonimo@gmail.com","123456@aZ","2023-06-12"),
("002","Ciclano", "ciclano@gmail.com","123456@cZ","2023-06-12"),
("003","Beltana", "beltrana@gmail.com","123456@bZ","2023-06-12"),
("004","Anônima", "anonima@gmail.com","123456@aN","2023-06-20");

SELECT * FROM users;

CREATE TABLE products(
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

