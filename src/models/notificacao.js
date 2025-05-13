const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificacao', {
    id_notificacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curso',
        key: 'id_curso'
      }
    },
    titulo_notificacao: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    data_notificacao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'notificacao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_notificacao",
        unique: true,
        fields: [
          { name: "id_notificacao" },
        ]
      },
    ]
  });
};
