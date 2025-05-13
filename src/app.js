const express = require('express');
const app = express();
const categoriaRoutes = require('./routes/routeCategoria');

//configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/categorias', categoriaRoutes); 

app.listen(app.get('port'), () => {
  console.log('Servidor iniciado na porta: ' + app.get('port'));
});
