const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Teste = sequelize.define('teste', {
    id_teste: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_curso: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_sincrono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    anexo_teste: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    titulo_teste: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    descricao_teste: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    dataentrega_teste: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'teste',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_teste",
        unique: true,
        fields: [{ name: "id_teste" }]
      }
    ]
  });

  return Teste;
};
