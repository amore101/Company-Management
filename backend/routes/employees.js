const router = require('express').Router();
let Employee = require('../models/employees.model');

router.route('/').get((req, res) => {
  // find is a mongodb method to get all
  // return a promise (json format)
  Employee.find()
    .then(Employees => res.json(Employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // Username, Name, Password, EmployeeId, Email, Phone, Salary
  const Employeename = req.body.Employeename;
  const password = req.body.password;

  const newEmployee = new Employee({Employeename, password});

  newEmployee.save()
    .then(() => res.json('Employee added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Employee.findById(req.params.id)
      .then(Employee => res.json(Employee))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
      .then(() => res.json('Employee deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
      .then(Employee => {
        Employee.name = req.body.name;
        Employee.email = req.body.email;
        Employee.address = req.body.address;
        Employee.phone = req.body.phone;
        Employee.role = req.body.role;
  
        Employee.save()
          .then(() => res.json('Employee updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;