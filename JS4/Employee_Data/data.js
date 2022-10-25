let employees = [{ id: 101, name: "Rahul", email: "rahul@gmail.com" },
{ id: 102, name: "Sonia", email: "sonia@gmail.com" },
{ id: 103, name: "Priyanka", email: "p@gmail.com" },
{ id: 104, name: "Modi", email: "Modi@gmail.com" }]
function display_Data() {
    let rows = "";
    employees.forEach((employee) => {
        rows = rows + `<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.email}</td>
                    </tr>`
    })
    document.getElementById('tbody_Data').innerHTML = rows
}