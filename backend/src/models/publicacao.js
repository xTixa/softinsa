const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publicacao', {
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'utilizadores',
        key: 'id_utilizador'
      }
    },
    titulo_publicacao: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    data_publicacao: {
      type: DataTypes.DATE,
      allowNull: false
    },
    descricao_publicacao: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    comentario_publicacao: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'publicacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_publicacao",
        unique: true,
        fields: [
          { name: "id_publicacao" },
        ]
      },
    ]
  });
};
