const express = require('express');
const app     = express();
const path    = require('path');

const PORT = 3000;

app.set('port', process.env.PORT || PORT);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
