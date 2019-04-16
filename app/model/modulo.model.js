module.exports = (sequelize, Sequelize) => {
	const modulos = sequelize.define('modulos', {
		modulo: {
			type: Sequelize.INTEGER
		},
		nombre: {
			type: Sequelize.STRING
		}
	});
	return modulos;
}
