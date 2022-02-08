const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Node Simple Project - Hello ${name}!`);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`------------------------------------------------\nNode Simple Project\n
  Hello World! - rodando: listening on port ${port} \n
  by Carlos Ciccolani\n------------------------------------------------
  `);
});