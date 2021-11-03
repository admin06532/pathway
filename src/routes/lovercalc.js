const LoveForm = require('../models/loveCalulator.model');
const express = require('express');
const router = express.Router();

// Create a new customer
// POST localhost:3500/api/contactus
router.post('/lovecalc', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  const model = new LoveForm(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }
      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router