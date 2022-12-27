
module.exports = (sequelize, DataTypes) => {
  
  const Course = sequelize.define('Course' , {
      
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        duration: {
          type: DataTypes.INTEGER,
        },
        fees: {
          type: DataTypes.INTEGER,
        },
    },
    {
      tableName : 'Courses',

    });

  return Course;
  
}