const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('denuncia_post', {
    id_denuncia: {
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
    motivo: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    data_denuncia: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'denuncia_post',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_denuncia_post",
        unique: true,
        fields: [
          { name: "id_denuncia" },
        ]
      },
    ]
  });
};
