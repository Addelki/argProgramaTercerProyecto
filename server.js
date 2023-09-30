const express = require('express');
const app = express();
const connection = require('./config/connection.js');
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(async (req, res, next) => {
    try {
      await connection.authenticate();
      next();
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error en el servidor", description: error.message });
    }
  });  

app.get('/', (req, res) => {
    res.status(200).end('Bienvenido a la API con MySQL y Sequelize');
})

const contenidoController = require('./controllers/contenidoController.js');
app.get('/catalogo', contenidoController.getAll);
app.get('/categorias', contenidoController.getAllCategories);
app.get('/catalogo/:id', contenidoController.getById);
app.get('/catalogo/nombre/:name', contenidoController.getByName);
app.get('/catalogo/genero/:genre', contenidoController.getAllInGenre);
app.get('/catalogo/categoria/:category', contenidoController.getAllInCategory);
app.get('/catalogo/actor/:actor', contenidoController.getAllWithActor);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto: ${ PORT }`);
})


