const i prompts = {
    questions:[
        {
            type:'list',
            name: 'start',
            message: what would you like to do?

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
    ]

}