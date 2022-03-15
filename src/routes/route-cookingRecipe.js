const express = require('express');
const router = express.Router()
const Recipes = require('../database/models/cooking-recipe');
const Ingredients = require('../database/models/ingredients');

router.get('/:page',  async (req, res) => {
  try {
    if(parseInt(req.params.page)<= 1){
   const recipe = await Recipes.findAll({ limit: 5});
  res.status(200).json({ recipe });
}else{
    const recipe = await Recipes.findAll({offset: (parseInt(req.params.page )*5)-1, limit: 6});
  res.status(200).json({ recipe });
}
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/id/:id',  async (req, res) => {
  try {
    Recipes.findByPk(req.params.id).then(recipe => {
 res.status(200).json({ recipe});
})

  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.get('/id/:id/ingredients',  async (req, res) => {
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