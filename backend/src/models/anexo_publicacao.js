const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anexo_publicacao', {
    idanexo_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicacao',
        key: 'id_publicacao'
      }
    }
  }, {
    sequelize,
    tableName: 'anexo_publicacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_anexo_publicacao",
        unique: true,
        fields: [
          { name: "idanexo_publicacao" },
        ]
      },
    ]
  });
};
