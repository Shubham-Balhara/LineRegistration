module.exports = (sequelize, DataTypes) => {
    var Line = sequelize.define('Line', {
      lineId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
      },
      lineName:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      width:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      height:{
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      lineDirection:{
         type:DataTypes.STRING,
         allowNull:false 
      },
      lane:{
        type:DataTypes.STRING,
        allowNull:false 
     },
     type:{
        type:DataTypes.STRING,
        allowNull:false 
     }
    });
    return Line;
  };