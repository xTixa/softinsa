const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('anexo_aula', {
    id_anexoaula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_aula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'aula',
        key: 'id_aula'
      }
    }
  }, {
    sequelize,
    tableName: 'anexo_aula',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_anexo_aula",
        unique: true,
        fields: [
          { name: "id_anexoaula" },
        ]
      },
    ]
  });
};
