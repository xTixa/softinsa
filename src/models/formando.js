const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('formando', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'utilizadores',
        key: 'id_utilizador'
      }
    },
    id_formando: {
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
    n_cursosacabados: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    n_cursosinscritos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao_formando: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    educacao_formando: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    habilidades_formando: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    certificacoes_formando: {
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
    tableName: 'formando',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_formando",
        unique: true,
        fields: [
          { name: "id_utilizador" },
          { name: "id_formando" },
        ]
      },
    ]
  });
};
