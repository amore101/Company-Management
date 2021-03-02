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
  const username = req.body.username;
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  const phone = req.body.phone;
  const salary = Number(req.body.salary);

  const newEmployee = new Employee({username, name, password, email, phone, salary});

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
        Employee.username = req.body.username;
        Employee.name = req.body.name;
        Employee.password = req.body.password;
        Employee.email = req.body.email;
        Employee.phone = req.body.phone;
        Employee.salary = Number(req.body.salary);
  
        Employee.save()
          .then(() => res.json('Employee updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;