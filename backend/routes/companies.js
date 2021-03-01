const router = require('express').Router();
let Company = require('../models/companies.model');

router.route('/').get((req, res) => {
  Company.find()
    .then(companies => res.json(companies))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = res.body.name;
  const email = res.body.email;
  const address = res.body.address;
  const phone = res.body.phone;
  const role = res.body.role;

  const newCompany = new Company({
    name,
    email,
    address,
    phone,
    role
  });

  newCompany.save()
  .then(() => res.json('Company added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Company.findById(req.params.id)
    .then(Company => res.json(Company))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Company.findByIdAndDelete(req.params.id)
    .then(() => res.json('Company deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Company.findById(req.params.id)
    .then(Company => {
      Company.name = req.body.name;
      Company.email = req.body.email;
      Company.address = req.body.address;
      Company.phone = req.body.phone;
      Company.role = req.body.role;

      Company.save()
        .then(() => res.json('Company updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;