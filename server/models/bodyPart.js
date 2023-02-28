const {sequelize, DataTypes} = require('./sequelize')
    const bodyParts = sequelize.define(
        "bodyPart",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            part: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
        },
        {
            timestamps: false,
        }
    );
   

module.exports=bodyParts;