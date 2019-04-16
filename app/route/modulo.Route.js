const express = require('express');
const router = express.Router();
const modulos = require('../controller/modulo.Controller');


router
	
	.get('/', modulos.findAll)
    .post('/', modulos.create);

router
	
	.get('/:ModuloId', modulos.findById)
    .delete('/:ModuloId', modulos.delete)
    .put('/:ModuloId', modulos.update);


module.exports = router;