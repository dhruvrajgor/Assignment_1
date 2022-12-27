const { Sequelize, DataTypes } = require('sequelize');
//var DataTypes = require('sequelize/lib/data-types');

const sequelize = new Sequelize(
 'node_course_curd',
 'root1',
 'Dhruv@123',
  {
    host: 'localhost',
    logging : false,
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.course = require('./course')(sequelize,DataTypes);

sequelize.sync({ force: true });

module.exports = db;