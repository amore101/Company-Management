const router = require('express').Router();
let Order = require('../models/order.model');

router.route('/').get((req, res) => {
  // find is a mongodb method to get all
  // return a promise (json format)
  Order.find()
    .then(Orders => res.json(Orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const projectName = req.body.projectName;
  const companyName = req.body.companyName;

  const newOrder = new Order({projectName, companyName});

  newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:project_name').delete((req, res) => {
  Order.findOneAndDelete({projectName: req.params.project_name})
    .then(() => res.json('Order deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;