const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('submeter_ficheiro', {
    id_submissao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'curso',
        key: 'id_curso'
      }
    },
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'formando',
        key: 'id_utilizador'
      }
    },
    id_formando: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'formando',
        key: 'id_utilizador'
      }
    },
    formato: {
      type: DataTypes.STRING(256),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'submeter_ficheiro',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_submeter_ficheiro",
        unique: true,
        fields: [
          { name: "id_submissao" },
        ]
      },
    ]
  });
};
