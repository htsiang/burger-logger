DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger VARCHAR(255) NOT NULL,
    eatenStatus BOOLEAN NOT NULL DEFAULT false
);