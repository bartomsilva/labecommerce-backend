-- Active: 1689104433917@@127.0.0.1@3306
--
-- File generated with SQLiteStudio v3.4.4 on ter. jul. 11 15:50:40 2023
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: products
DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products(
  id TEXT PRIMARY KEY UNIQUE NOT NULL,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL
);

-- Table: purchases
DROP TABLE IF EXISTS purchases;
CREATE TABLE IF NOT EXISTS purchases(
  id TEXT PRIMARY KEY NOT NULL,
  buyer TEXT NOT NULL,
  total_price REAL NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (buyer) REFERENCES users(id)
  ON UPDATE CASCADE
  ON DELETE CASCADE
);

-- Table: purchases_products
DROP TABLE IF EXISTS purchases_products;
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

-- Table: users
DROP TABLE IF EXISTS users;
CREATE TABLE IF NOT EXISTS users (id TEXT PRIMARY KEY UNIQUE NOT NULL, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL, password TEXT NOT NULL, created_at TEXT NOT NULL DEFAULT (DATETIME('now', 'localtime')), salary REAL (10, 2));

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
