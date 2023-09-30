const Contenido = require('../models/contenido.js');
const { Op, Sequelize } = require('sequelize');

//Obtener el catalogo completo
const getAll = async (req, res) => {
    try {
        const contenidos = await Contenido.findAll();
        contenidos.length !== 0 ? res.status(200).json(contenidos)
        : res.status(404).json({error : 'No se encontraton contenidos para listar'});
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
        console.log(error)
    }
};

//Obtener la lista de categorias
const getAllCategories = async (req, res) => {
    try {
        const categorias = await Contenido.findAll({attributes : ['categoria'], group : ['categoria']});
        categorias.length !== 0 ? res.status(200).json(categorias)
        : res.status(404).json({error : 'No se encontraton categorias para listar'});
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
        console.log(error)
    }
};

//Obtener un contenido indicando su ID
const getById = async (req, res) => {
    const id = req.params.id;
    try {
        const contenido = await Contenido.findByPk(id);
        contenido ? res.status(200).json(contenido)
        : res.status(404).json({ error: 'No se encontro el contenido solicitado.'});
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
        console.log(error)
    }
};

//Obtener un contenido indicando su nombre
const getByName = async (req, res) => {
    const name = req.params.name;
    try {
        const contenido = await Contenido.findOne({where : {titulo : name }});
        contenido ? res.status(200).json(contenido)
        : res.status(404).json({ error: 'No se encontro el contenido solicitado.'}); 
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
        console.log(error)
    }
};

//Obtener contenidos indicando su genero
const getAllInGenre = async (req, res) => {
    const genre = req.params.genre;
    try {
        const contenidos = await Contenido.findAll({where : {genero : {[Op.like]: `%${genre}%`}}});
        contenidos.length !== 0 ? res.status(200).json(contenidos)
        : res.status(404).json({error : 'No se encontraton contenidos para listar'});
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
        console.log(error)
    }
};

//Obtener contenidos indicando su categoria
const getAllInCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const contenidos = await Contenido.findAll({where : {categoria : category }});
        contenidos.length !== 0 ? res.status(200).json(contenidos)
        : res.status(404).json({error : 'No se encontraton contenidos para listar'});
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
        console.log(error);
    }
};

//Obtener contnidos indicando un actor
const getAllWithActor = async (req, res) => {
    const actor = req.params.actor;
    try {
        const contenidos = await Contenido.findAll({where : {reparto : {[Op.like]: `%${ actor }%`}}});
        contenidos.length !== 0 ? res.status(200).json(contenidos)
        : res.status(404).json({error : 'No se encontraton contenidos para listar'});
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', description: error.message });
        console.log(error);
}
};

module.exports = { getAll, getAllCategories, getById, getByName, getAllInGenre, getAllInCategory, getAllWithActor };