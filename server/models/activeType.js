const { sequelize, DataTypes } = require("./sequelize");
    const ActiveType = sequelize.define(
      "activeType",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        type: {
            type: DataTypes.STRING(45),
            allowNull: false
          }
      },
      {
        timestamps: false,
    }
    );
    module.exports = ActiveType
  
  