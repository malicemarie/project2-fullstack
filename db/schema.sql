DROP DATABASE IF EXISTS recipes_db;

CREATE DATABASE recipes_db;

USE recipes_db;

CREATE TABLE recipes (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    measurement VARCHAR(30) NOT NULL,
    ingredientname VARCHAR(500) NOT NULL,
    category VARCHAR(50) NOT NULL,
    servingsize INT,
    PRIMARY KEY (id) 
);