const express = require('express');
const app = express();
const db = require('./models');
const categoriaRoutes = require('./routes/routeCategoria');
const utilizadorRoutes = require('./routes/routeUtilizadores');
const areaRoutes = require('./routes/routeArea');
const topicoRoutes = require('./routes/routeTopico'); 

// Configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Corrigir aqui o caminho da rota
app.use('/api/categorias', categoriaRoutes);
app.use('/api/utilizadores', utilizadorRoutes);
app.use('/api/areas', areaRoutes);
app.use('/api/topicos', topicoRoutes);

// Sincronizar e arrancar servidor
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log('Tabelas sincronizadas com a base de dados');
    app.listen(app.get('port'), () => {
      console.log('Servidor a correr na porta ' + app.get('port'));
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar com a base de dados:', err);
  });
