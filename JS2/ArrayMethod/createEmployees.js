let employees = [{ id: 101, name: "Rahul", sal: 45000 },
{ id: 102, name: "Sonia", sal: 55000 }]
function createEmployee(emp) {
    //adding new Employee
    employees.push(emp)
}
createEmployee({ id: 103, name: "Priyanka", sal: 65000 });
console.log(employees)