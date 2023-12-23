import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Serveur en ligne !');
});

const server = app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

server.on('error', (err) => {
  console.error('Error starting server:', err);
});
