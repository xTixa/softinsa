const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aula', {
    id_aula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'curso',
        key: 'id_curso'
      }
    },
    url_video: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    titulo_aula: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    descricao_aula: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'aula',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_aula",
        unique: true,
        fields: [
          { name: "id_aula" },
        ]
      },
    ]
  });
};
