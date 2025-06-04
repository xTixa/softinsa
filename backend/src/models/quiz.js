const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('quiz', {
    id_quiz: {
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
    anexo_quiz: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    descricao_quiz: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    titulo_quiz: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    dataentrega_quiz: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'quiz',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_quiz",
        unique: true,
        fields: [
          { name: "id_quiz" },
        ]
      },
    ]
  });
};
