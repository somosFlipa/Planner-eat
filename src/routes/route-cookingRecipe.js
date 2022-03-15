const express = require('express');
const router = express.Router()
const recipes = require('../database/models/cooking-recipe');

router.get('/',  async (req, res) => {
  try {
    const recipe = await recipes.findAll();
    console.log('Getting recipes')
    res.status(200).json({ recipe });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
module.exports = router;