const express = require('express');
const app = express();

//configurações
app.set('port', process.env.port || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(app.get('port'), () => {
  console.log('Servidor iniciado na porta: ' + app.get('port'));
});
