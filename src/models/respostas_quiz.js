const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('respostas_quiz', {
    id_respostaquiz: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_formando: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_quiz: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'quiz',
        key: 'id_quiz'
      }
    },
    notaquiz: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    data: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hora: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'respostas_quiz',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_respostas_quiz",
        unique: true,
        fields: [
          { name: "id_respostaquiz" },
        ]
      },
    ]
  });
};
