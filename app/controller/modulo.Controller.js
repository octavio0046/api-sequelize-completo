const db = require('../config/db.config.js');
const modulo = db.modulos;

exports.create = (req, res) =>
{
	modulo.create
	(
		{
			modulo: req.body.modulo,
			mombre: req.body.nombre
		}
	)
	.then (
		modulo => {res.status(200).json(modulo);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};
exports.findAll = (req, res) => 
{
	modulo.findAll()
	.then (
		modulos => {res.status(200).json(modulos);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};
exports.findById = (req, res) =>
{
	modulo.findById
	(
		req.params.ModuloId
	)
	.then (
		modulo => {res.send(modulo);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};
exports.update = (req, res) =>
{
	modulo.update
	(
		{
			modulo: req.body.modulo,
			nombre: req.body.nombre
		},
		{
			where: { id: req.params.ModuloId }
		}
	)
	.then (
		modulo => {res.status(200).send(modulo);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};
exports.delete = (req, res) =>
{
	const id = req.params.ModuloId;
	modulo.destroy
	(
		{
			where: { id: id }
		}
	)
	.then (
		modulo => {res.status(200).send(modulo);}
	)
	.catch (
		err => {res.status(500).json({ error: err })}
	);
};