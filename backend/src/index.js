import express from 'express';
import data from './diagnosesData/data.js';
const app = express();

app.get('/data', function (req, res) {
  res.json(data);
})

app.listen(3000);
