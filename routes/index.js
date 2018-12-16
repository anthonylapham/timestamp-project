const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('response');
});

router.get('/api/timestamp', (req, res) => {
  // Date.now() => current time in ms
  // new Date() => a new date object. with lots of properties and methods
  function date_string(string = null) {
    if (!string) {
      const now = new Date();
      const date = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      const unix = now.getTime();
      const natural = `${month}-${date}-${year}`;
      return { natural, unix }
    }

    // do we have a date string
    let givenDate = null;
    try {
      givenDate = new Date(string);
    } catch (e) {
      const givenUnix = parseInt(string, 10);
      if (!isNaN(givenUnix)) {
        givenDate = new Date(givenUnix);
      }
      return { err: 'Invalid Date' }
    }
    const date = givenDate.getDate();
    const month = givenDate.getMonth() + 1;
    const year = givenDate.getFullYear();
    const unix = givenDate.getTime();
    const natural = `${month}-${date}-${year}`;
    return { natural, unix }
  }

  // if ?date_string is empty, then return current time
  let response = null;
  if (req.query && req.query.date_string) {
    response = date_string(req.query.date_string);
  } else {
    response = date_string();
  }
  res.send(response);
});

module.exports = router;
