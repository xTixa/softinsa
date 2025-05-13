const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('respostas_teste', {
    id_respostateste: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_teste: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'teste',
        key: 'id_teste'
      }
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_formando: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notateste: {
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
    },
    url: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'respostas_teste',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_respostas_teste",
        unique: true,
        fields: [
          { name: "id_respostateste" },
        ]
      },
    ]
  });
};
