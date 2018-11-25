const path = require('path');
const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', require('./routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
