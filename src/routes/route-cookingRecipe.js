const express = require('express');
const router = express.Router()
const Recipes = require('../database/models/cooking-recipe');
const Ingredients = require('../database/models/ingredients');

router.get('/',  async (req, res) => {
  try {
    const recipe = await Recipes.findAll();
    console.log('Getting recipes')
    res.status(200).json({ recipe });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/:id',  async (req, res) => {
  try {
    Recipes.findByPk(req.params.id).then(recipe => {
 res.status(200).json({ recipe});
})

  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/:id/ingredients',  async (req, res) => {
  try {
    Recipes.findByPk(req.params.id).then(recipe => {
    recipe.getIngredients({attributes: ['name', 'measure']}).then(ingredients =>{
 res.status(200).json({ ingredients});
})})

  } catch (err) {
    res.status(500).json({ error: err });
  }
});
module.exports = router;