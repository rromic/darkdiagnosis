import express from 'express';
import data from './diagnosesData/data.js';
const app = express();

app.get('/', function (req, res) {
  res.json(data);
})

app.listen(3000);
