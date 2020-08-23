import express from 'express';
import data from './diagnosesData/data.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use('/images', express.static('src/diagnosesData'));

app.get('/data', function (req, res) {
  res.json(data);
})

app.listen(2000, () => {console.log('Server running on port 2000')});
