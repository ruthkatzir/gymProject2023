const {sequelize, DataTypes} = require('./sequelize')
    const Price = sequelize.define(
      "price",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        type: {
            type: DataTypes.STRING(30),
            allowNull: false
          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          term: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          numEnter: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          
      },
      {
        timestamps: false,
    }
    );

    module.exports = Price
  