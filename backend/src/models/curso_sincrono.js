const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curso_sincrono', {
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'curso',
        key: 'id_curso'
      }
    },
    id_sincrono: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'formador',
        key: 'id_utilizador'
      }
    },
    id_formador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'formador',
        key: 'id_utilizador'
      }
    },
    id_area: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_topico: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    membros: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    avaliacao: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    tumbnail: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    data_fim: {
      type: DataTypes.DATE,
      allowNull: false
    },
    introducao_curso: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    num_vagas: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'curso_sincrono',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_curso_sincrono",
        unique: true,
        fields: [
          { name: "id_curso" },
          { name: "id_sincrono" },
        ]
      },
    ]
  });
};
