const { sequelize, DataTypes } = require("./sequelize");


    const Purchase = sequelize.define(
      "purchase",
      {
        purchaseId: {
           type:DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true,
          allowNull: false
       
        },
        userId: {
            type: DataTypes.STRING(30),
            allowNull: false,
       
          },
          startDate: {
      
            allowNull: false,
            type:DataTypes.DATE
          }
         ,numEnters:
         {
            type:DataTypes.INTEGER,
            allowNull: false
         },

        type: {
          type: DataTypes.INTEGER,
          allowNull: false,
        
        },
       
      },
      {
        timestamps: false,
    }
    );

    module.exports = Purchase
  
  
  
  