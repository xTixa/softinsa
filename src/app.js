const express = require('express');
const app = express();
const db = require('./models');
const categoriaRoutes = require('./routes/routeCategoria');

//configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/categorias', categoriaRoutes); 


db.sequelize.sync({ alter: true }) // ou { force: true } para recriar tudo sempre
  .then(() => {
    console.log('Tabelas sincronizadas com a base de dados');
    app.listen(3000, () => {
      console.log('Servidor a correr na porta 3000');
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar com a base de dados:', err);
  });

app.listen(app.get('port'), () => {
  console.log('Servidor iniciado na porta: ' + app.get('port'));
});
