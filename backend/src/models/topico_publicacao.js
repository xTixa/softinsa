const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('topico_publicacao', {
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'publicacao',
        key: 'id_publicacao'
      }
    },
    id_topico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'topico',
        key: 'id_topico'
      }
    }
  }, {
    sequelize,
    tableName: 'topico_publicacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_topico_publicacao",
        unique: true,
        fields: [
          { name: "id_publicacao" },
          { name: "id_topico" },
        ]
      },
    ]
  });
};
