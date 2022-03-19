const employee = {};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = { ...employee, [name]: streetAddress }
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress;
    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { employee: [name] }
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    employee[name] = streetAddress;
    delete employee[name];
    return employee;
}

