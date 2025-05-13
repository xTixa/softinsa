const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formador', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilizadores',
        key: 'id_utilizador'
      }
    },
    id_formador: {
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
    },
    total_formandos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_cursos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao_formador: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    educacao_formador: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    habilidades_formador: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    certificacoes_formador: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    foto_perfil: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    data_inscricao: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'formador',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_formador",
        unique: true,
        fields: [
          { name: "id_utilizador" },
          { name: "id_formador" },
        ]
      },
    ]
  });
};
