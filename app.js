const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const RouteUsuario = require('./app/route/usuario.route');
const RouteModulo = require('./app/route/modulo.Route');
const RouteBitacora = require('./app/route/bitacora.route');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./app/config/db.config.js');

// // force: true will drop the table if it already exists
//db.sequelize.sync({ force: true }).then(() => {
 //   console.log('Drop and Resync with { force: true }');
//});

app.use('/usuarios', RouteUsuario);
app.use('/modulos', RouteModulo);
app.use('/bitacora', RouteBitacora);

app.use((req, res, net) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;