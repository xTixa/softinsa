const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avaliacao_publicacao', {
    id_avaliacao_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizadores',
        key: 'id_utilizador'
      }
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicacao',
        key: 'id_publicacao'
      }
    },
    upvote: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    downvote: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'avaliacao_publicacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_avaliacao_publicacao",
        unique: true,
        fields: [
          { name: "id_avaliacao_publicacao" },
        ]
      },
    ]
  });
};
