const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('response');
});

router.get('/api/timestamp', (req, res) => {
  // Date.now() => current time in ms
  // new Date() => a new date object. with lots of properties and methods
  function date_string(ms) {
    const givenDate = new Date(ms);
    const date = givenDate.getDate();
    const month = givenDate.getMonth() + 1;
    const year = givenDate.getFullYear();
    const unix = givenDate.getTime();
    const natural = `${month}-${date}-${year}`;
    return { natural, unix }
  }

  // if ?date_string is empty, then return current time
  if (req.query && req.query.date_string) {
    const time = parseInt(req.query.date_string, 10);
    if (!isNaN(time) && !req.query.date_string.includes('-')) {
      return res.send(date_string(time))
    } else {
      const date = new Date(req.query.date_string);
      if (!isNaN(date.getMonth())) {
        return res.send(date_string(date.getTime()))
      } else {
        return res.send({ natural: null, unix: null })
      }
    }
  } else {
    res.send(date_string(Date.now()));
  }
});

module.exports = router;
