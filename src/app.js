const express = require("express");
const app = express();
const db = require('./database/db')


//Inicializacion del server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server start');
});



const recipe = require('./routes/route-cookingRecipe');
app.use('/recipes', recipe) 
// prueba database
db.authenticate()
  .then(() => {
    console.log("Database conectada");
})
  .catch((error) => {
    console.log('no arranco');
});

