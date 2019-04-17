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
        type: DataTypes.DECIMAL(10,4),
        allowNull: false,
      },
      height:{
        type: DataTypes.DECIMAL,
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