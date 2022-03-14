const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;



app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,}));

app.listen(PORT, () => {
  console.log(`Server start on ${PORT}`);
});

app.get("/", (req, res) => {
res.status(200).send('funciono correctamente')
  res.json({ user: 'Maximo'})
});


// empezando el proyecto