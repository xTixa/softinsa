const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('area', {
    id_area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }
    },
    nome_area: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'area',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_area",
        unique: true,
        fields: [
          { name: "id_area" },
        ]
      },
    ]
  });
};
