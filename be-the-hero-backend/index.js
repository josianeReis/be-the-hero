const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: 'bla bla bla',
    aluno: 'josiane reis',
  });
})

app.listen(3333);