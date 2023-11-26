import path from 'path';
import express from 'express';
import jsonServer from 'json-server';

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/db', middlewares, router);

module.exports = app;
