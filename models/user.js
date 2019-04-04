module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey:true
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile:{
      type: DataTypes.STRING,
      allowNull: false,
      maxLength:13
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};