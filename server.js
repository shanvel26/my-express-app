const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;
// app.use(cors());

app.get('/api', (req, res) => {
  res.json({ wish: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
