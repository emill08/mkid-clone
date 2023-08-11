'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/helper');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Product, {foreignKey: "UserId"})
    }
  }
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Email must be unique"
      },
      allowNull: false,
      validate: {
        notNull: {
          msg: "Email cannot be empty"
        },
        notEmpty: {
          msg: "Email cannot be empty"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Password cannot be empty!"
        },
        notEmpty: {
          msg: "Password cannot be empty!"
        }
      }
    },
    address: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate ((user) => {
    user.password = hashPassword(user.password)
  })
  return User;
};