const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('area_partilha', {
    id_area: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'area',
        key: 'id_area'
      }
    },
    id_publicacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'publicacao',
        key: 'id_publicacao'
      }
    }
  }, {
    sequelize,
    tableName: 'area_partilha',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_area_partilha",
        unique: true,
        fields: [
          { name: "id_area" },
          { name: "id_publicacao" },
        ]
      },
    ]
  });
};
