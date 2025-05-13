const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topico', {
    id_topico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_area: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'area',
        key: 'id_area'
      }
    },
    nome_topico: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'topico',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_topico",
        unique: true,
        fields: [
          { name: "id_topico" },
        ]
      },
    ]
  });
};
