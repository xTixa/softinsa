const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comentario', {
    idcomentario: {
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
    },
    com_idcomentario: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comentario',
        key: 'idcomentario'
      }
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'utilizadores',
        key: 'id_utilizador'
      }
    },
    data_comentario: {
      type: DataTypes.DATE,
      allowNull: false
    },
    descricao_comentario: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    comentario_pai: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'comentario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_comentario",
        unique: true,
        fields: [
          { name: "idcomentario" },
        ]
      },
    ]
  });
};
