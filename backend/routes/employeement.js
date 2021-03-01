const router = require('express').Router();
let Employment = require('../models/employment.model');

router.route('/').get((req, res) => {
  // find is a mongodb method to get all
  // return a promise (json format)
  Employment.find()
    .then(Employments => res.json(Employments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const companyName = req.body.companyName;

  const newEmployment = new Employment({username, companyName});

  newEmployment.save()
    .then(() => res.json('Employment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;