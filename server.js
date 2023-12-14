const mysql = require('mysql');
const inquirer = require('inquirer');

const connection= mysql.createConnection({

    host:'localhost',
    port:3306
    user: 'root'
    password: 'docker123'
    database: 'employed_tracker'
});

const iPrompts = require('./config/questions')
const viewTable = (tableName) => {
    let query = ``
    switch (tableName) {
        case 'departments':
            query = `SELECT DISTINCT departments.name as Department, departments.id
            FROM departments`
            break;
        case 'roles':
            query = `SELECT DISTINCT roles.title AS Role, roles.salary AS Salary, departments.name AS Department, roles.id
            FROM roles 
            JOIN departments 
            ON roles.department_id = departments.id`
            break;
        case 'employees':
            query = `SELECT DISTINCT CONCAT(employees.first_name, ' ', employees.last_name) AS Employee, 
            employees.id,
            roles.title AS Role,
            departments.name AS Department
            FROM employees 
            JOIN roles
            ON employees.role_id = roles.id
            RIGHT JOIN departments
            ON roles.department_id = departments.id`
            break;
        case 'managers':
            query = `SELECT DISTINCT CONCAT(employees.first_name, ' ', employees.last_name) AS Manager,
            roles.title AS Role
            FROM employees 
            JOIN roles
            ON employees.role_id = roles.id
            WHERE employees.manager_id is NULL`
            break;
        case 'employees by manager':
            query = `SELECT DISTINCT
            CONCAT(employees.first_name, ' ', employees.last_name) AS Employee,
            CONCAT(managers.first_name, ' ', managers.last_name)  AS Manager
            FROM employees
            INNER JOIN employees as managers
            ON employees.manager_id = managers.id`
            break;
        case 'employees by department':
            query = `SELECT DISTINCT
                CONCAT(employees.first_name, ' ', employees.last_name) AS Employee, 
                departments.name AS Department 
                FROM employees
                JOIN roles
                ON employees.role_id = roles.id
                JOIN departments
                ON roles.department_id = departments.id`
            break;
    }
    console.clear()
    db.promise().query(query)
        .then(([rows, fields]) => {
        // Sets the index number in the table to the id of the specific department, role, or employee
        const newRows = rows.reduce((row, {id, title, salary, first_name, last_name, ...x}) => 
        { row[id] = x; return row}, {})
            console.table(newRows)
        })
        .catch((err) => console.log(err))
        .then(() => startProgram())
}

//Adds the desired department to the database
const addDepartment = (newDepartment) => {
    db.promise().query(`INSERT INTO departments(name) VALUES('${newDepartment}')`)
        .then(() => console.clear())
        .then(() => console.log(`${JSON.stringify(newDepartment)} was successfully added as a department`))
        .then(() => startProgram());
}