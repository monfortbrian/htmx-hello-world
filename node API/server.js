const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create a new instance of express
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to the node API');
});

app.post('/message', async (req, res) => {
  res.json({
    message: 'This is the response from POST req',
    role: 'POST res',
  });
});

const PORT = process.env.PORT || 1500;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
