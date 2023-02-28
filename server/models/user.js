const {sequelize, DataTypes} = require('./sequelize')
  const User = sequelize.define(
    "user",
    {
      gmail: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique:true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phoneNum: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ImgPath: {
        type: DataTypes.STRING,
        allowNull: false
      },
      DateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      roles:{
        //allowNull:false,
        type:DataTypes.ENUM('USER', 'ADMIN'),
        defaultValue:'USER', 
       
       
        },
    },
    {
      timestamps: false,
    }
  );
  module.exports = User
