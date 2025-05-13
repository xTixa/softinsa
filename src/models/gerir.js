const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gerir', {
    id_utilizador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gestor',
        key: 'id_utilizador'
      }
    },
    id_gestor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'gestor',
        key: 'id_utilizador'
      }
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'curso',
        key: 'id_curso'
      }
    }
  }, {
    sequelize,
    tableName: 'gerir',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_gerir",
        unique: true,
        fields: [
          { name: "id_utilizador" },
          { name: "id_gestor" },
          { name: "id_curso" },
        ]
      },
    ]
  });
};
