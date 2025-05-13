const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categoria_publicacao', {
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'publicacao',
        key: 'id_publicacao'
      }
    }
  }, {
    sequelize,
    tableName: 'categoria_publicacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_categoria_publicacao",
        unique: true,
        fields: [
          { name: "id_categoria" },
          { name: "id_publicacao" },
        ]
      },
    ]
  });
};
