const router = require('express').Router();
let Project = require('../models/projects.model');

router.route('/').get((req, res) => {
  // find is a mongodb method to get all
  // return a promise (json format)
  Project.find()
    .then(Projects => res.json(Projects))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    // id profit deadline
  const profit = Number(req.body.profit);
  const deadline = req.body.deadline;

  const newProject = new Project({profit, deadline});

  newProject.save()
    .then(() => res.json('Project added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Project.findById(req.params.id)
      .then(Project => res.json(Project))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/:id').delete((req, res) => {
    Project.findByIdAndDelete(req.params.id)
      .then(() => res.json('Project deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  router.route('/update/:id').post((req, res) => {
    Project.findById(req.params.id)
      .then(Project => {
        Project.deadline = req.body.deadline;
        Project.profit = Number(req.body.profit);
  
        Project.save()
          .then(() => res.json('Project updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;