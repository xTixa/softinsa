const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificar', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilizadores',
        key: 'id_utilizador'
      }
    },
    id_notificacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'notificacao',
        key: 'id_notificacao'
      }
    }
  }, {
    sequelize,
    tableName: 'notificar',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_notificar",
        unique: true,
        fields: [
          { name: "id_utilizador" },
          { name: "id_notificacao" },
        ]
      },
    ]
  });
};
