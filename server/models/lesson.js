const {sequelize, DataTypes} = require('./sequelize')
  const Lesson = sequelize.define(
    "lesson",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      }
    },
    {
      timestamps: false,
  }
  );
  module.exports = Lesson
