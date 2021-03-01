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
  const projectId = req.body.projectId;

  const newAssignemnt = new Assignment({username, projectId});

  newAssignemnt.save()
    .then(() => res.json('Assignment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;