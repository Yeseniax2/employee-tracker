const iPrompts = {
    questions:[
        {
            type:'list',
            name: 'start',
            message: 'what would you like to do?',

            choices : [
                'view all departments',
                'view all employees',
                'view all roles',
                'view employees by manager',
                'view employees by department',
                'Add a department',
                'add a role',
                'add an employee',
                'delete a department',
                'delete an employee',
                'delete a role',
                'update an employee role',
                'disconnect']

        },
        
        {
            type: "input",
            name: "roleTitle",
            message: "what is the title of the role?"
        },
        {
            type: "number",
            name: "roleSalary",
            messgae: "what is the yearly salary for this role?"
        },
        {
            type: "list",
            name: "roleDepartment",
            message: "Which department does this role belong to?",
            choices: []
        }
    ],
    addEmployeePrompt: [
        {
            type:"input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        updateEmployeePrompt: [
            {
                type: "list",
                name: "employeeChoice",
                message: "Which employee would you like to update?",
                choices: []
            },
            {
                type: 'list',
                name: 'updateRole',
                message: "What is the employee's new role?",
                choices: []
            },
    ],
    deleteRolePrompt: [
        {
            type: "list",
            name: "deleteRole",
            message: "Which role would you like to delete?",
            choices: []
        }
    ],
    deleteEmployeePrompt: [
        {
            type: "list",
            name: "deleteEmployee",
            message: "Which employee would you like to delete?",
            choices: []
        }
    ]
}

module.exports = iPrompts


