-- Active: 1686622860210@@127.0.0.1@3306
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
("003","Beltana", "beltrana@gmail.com","123456@bZ","2023-06-12");

SELECT * FROM users;

CREATE TABLE products(
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  image_url TEXT
);
    
INSERT INTO products (id, name, price,category)
VALUES
("001","Teclado Gamer Flash", 102,"Informática"),
("002","Mouse Gamer Flash", 50,"Informática"),
("003","CPU Gamer Flash", 900,"Informática"),
("004","Caixa Som", 88,"Eletrônicos"),
("005","TV 50 polegadas", 3500,"Eletrônicos");

SELECT * FROM products;

