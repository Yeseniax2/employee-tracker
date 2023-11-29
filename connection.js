const inquirer = require('inquirer');

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'docker123',
    database: 'employee_tracker',

});