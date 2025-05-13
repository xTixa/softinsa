const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('inscricao', {
    id_inscricao: {
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
      allowNull: false,
      references: {
        model: 'formando',
        key: 'id_utilizador'
      }
    },
    id_formando: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'formando',
        key: 'id_utilizador'
      }
    },
    estado: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    data_inscricao: {
      type: DataTypes.DATE,
      allowNull: true
    },
    notateste: {
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'inscricao',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_inscricao",
        unique: true,
        fields: [
          { name: "id_inscricao" },
        ]
      },
    ]
  });
};
