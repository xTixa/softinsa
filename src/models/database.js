const sequelize = require('sequelize');

const guardarDb = new sequelize('pint','postgres','4862',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});
    
guardarDb.sync({force: false});
module.exports = guardarDb; 