const {sequelize, DataTypes} = require('./sequelize')
  const Schedule = sequelize.define(
    "schedule",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      DayOfWeek: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      StartHour: {
        type: DataTypes.TIME(6),//check  ?
        allowNull: false,
      },
      LessonType: {
        type: DataTypes.INTEGER,
        allowNull: true //fix
      },
      guiedId: {
        type: DataTypes.STRING(30),
        allowNull: true
      },
      ActiveType: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    },
    {
      timestamps: false,
    }
  );
  module.exports = Schedule