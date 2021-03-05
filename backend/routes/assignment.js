const router = require('express').Router();
let Assignment = require('../models/assignment.model');

router.route('/').get((req, res) => {
  // find is a mongodb method to get all
  // return a promise (json format)
  Assignment.find()
    .then(assignments => res.json(assignments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const projectName = req.body.projectName;

  const newAssignemnt = new Assignment({username, projectName});

  newAssignemnt.save()
    .then(() => res.json('Assignment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:project_name').delete((req, res) => {
  Assignment.findOneAndDelete({projectName: req.params.project_name})
    .then(() => res.json('Assignment deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;