
## check-rs-json

###  BASE ON CONFIG MOCHA TEST PLUGIN 

## About



## Example

You may pass an `http.Server`, or a `Function` to `request()` - if the server is not
already listening for connections then it is bound to an ephemeral port for you so
there is no need to keep track of ports.

SuperTest works with any test framework, here is an example without using any
test framework at all:

```js
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
```