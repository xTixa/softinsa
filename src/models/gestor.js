const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gestor', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilizadores',
        key: 'id_utilizador'
      }
    },
    id_gestor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    palavra_passe: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    telemovel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.DATE,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'gestor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_gestor",
        unique: true,
        fields: [
          { name: "id_utilizador" },
          { name: "id_gestor" },
        ]
      },
    ]
  });
};
