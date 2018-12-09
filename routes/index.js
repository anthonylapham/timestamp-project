const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('response');
});

router.get('/api/timestamp', (req, res) => {
  // for empty date strings, get the current date/time
  // Date.now() => current time in ms
  // new Date() => a new date object. with lots of properties and methods
  const currentDate = newDate();
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

  const date_string = date + "-" + month + "-" + year;

  res.send(currentDate);
});

router.get('/api/timestamp/:date_string', (req, res) => {
  // use req.params.date_string for the value
  // check if it is valid or not
  // if it is valid, determine if it is MS or YYYY-MM-DD
  // if it is MS, req.params.date_string will be a string, so you will have to parseInt to make make it a number
});
module.exports = router;
