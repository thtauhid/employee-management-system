## Roadmap
1. Add Employee
2. Delete Employee
3. Update Employee Details
4. Attendance
5. View all Employees
6. Indivisual Employee Profile
7. Stats
8. Mobile App

## Technologies Used:

### Front End:

### Back End:


## API Reference:

### Front End:

### Back End:

Add New Employee: http://localhost:5000/add/employee [POST]

```
{
	"employeeid": "",
	"fullname": "",
	"institution": ""
}
```

View Existing Employee: http://localhost:5000/view/employee/all [GET]

`{}`

View Employee Profile: http://localhost:5000/view/employee/:id [GET]

```
{
	"employeeid": ""
}
```
