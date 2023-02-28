
const { DATEONLY } = require("sequelize");
const {sequelize, DataTypes} = require('./sequelize')
const Participation = sequelize.define(
  "participation",
  {

    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },

      userId: {

        type: DataTypes.STRING(30),
        allowNull: false
      // references: 'user', 
      //  referencesKey: 'gmail'
     },
    guideName:
    {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    dateLesson:
    {
      type: DATEONLY,
      allowNull: false

    },
    lessonType:
    {
      type: DataTypes.STRING(30),
      allowNull: false
      // references: 'lessons', 
      //referencesKey: 'name'     

    },
    hour:
    {//Time
      type: DataTypes.TIME(4),
      allowNull: false

    },
    grading: {

      type: DataTypes.INTEGER,
      allowNull: true
    },
  },
  {
    timestamps: false
  }

);
module.exports = Participation
