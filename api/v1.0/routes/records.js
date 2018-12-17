const express = require('express');
const actions = require('../actions/records');

const router = express.Router();

router.post('/', actions.create); // Create record
router.post('/:id', actions.create); // Create record with id
router.get('/', actions.find); // Find records
router.get('/:id', actions.findById); // Find record with id
router.put('/:id', actions.update); // Update record
router.delete('/:id', actions.delete); // Delete record
router.get('/:id/custom', actions.custom); // Your custom function

module.exports = router;
