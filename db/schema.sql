DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(30) NOT NULL
);

CREATE TABLE roleS (
    id INTEGER PRIMARY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id) REFERENCES departments(id) 
    ON DELETE SET NULL

);

CREATE TABLE employee (
   id INTEGER NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INTEGER,
   manager_id INTEGER,
   FOREIGN KEY (role_id), REFERENCES roles(id),
   FOREIGN KEY (manager_id) REFERENCES employee(id)

)