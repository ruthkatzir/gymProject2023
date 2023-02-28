const {sequelize, DataTypes} = require('./sequelize')
    const gymNastics = sequelize.define(
        "gymnastics",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            Name: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            Description: {
                type: DataTypes.STRING(200),
                allowNull: false,
            },
            MoviePath: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
        },
        {
            timestamps: false,
        }
    );
    module.exports = gymNastics;
