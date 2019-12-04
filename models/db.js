const Sequelize = require('sequelize');

// Conexión a la BD con sequelize
const sequelize = new Sequelize('proyecto', 'root', 'Acbtis51-', {
    host: 'al17154.systems',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established succesfully.');
    })
    .catch(err => {
        console.error('Unable to connect to database:', err);
    });
    
module.exports = sequelize;