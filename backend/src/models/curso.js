const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('curso', {
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'area',
        key: 'id_area'
      }
    },
    id_topico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'topico',
        key: 'id_topico'
      }
    },
    id_categoria: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categoria',
        key: 'id_categoria'
      }
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
    }
  }, {
    sequelize,
    tableName: 'curso',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_curso",
        unique: true,
        fields: [
          { name: "id_curso" },
        ]
      },
    ]
  });
};
