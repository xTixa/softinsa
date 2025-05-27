const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('avaliacao_curso', {
    id_avaliacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_formando: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curso',
        key: 'id_curso'
      }
    },
    n_estrelas: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    comentario: {
      type: DataTypes.STRING(256),
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
    tableName: 'avaliacao_curso',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_avaliacao_curso",
        unique: true,
        fields: [
          { name: "id_avaliacao" },
        ]
      },
    ]
  });
};
