const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sale', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    from_customer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'customers',
        key: 'id'
      }
    },
    currency_type: {
      type: DataTypes.ENUM('SR','INR','AED'),
      allowNull: false
    },
    currency_quantity: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    },
    currency_charge: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    },
    currency_total: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    },
    convertion_rate: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    },
    currency_total_aed: {
      type: DataTypes.DECIMAL(30,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sale',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "customer_id",
        using: "BTREE",
        fields: [
          { name: "customer_id" },
        ]
      },
      {
        name: "fk_foreign_fkey",
        using: "BTREE",
        fields: [
          { name: "from_customer" },
        ]
      },
    ]
  });
};
