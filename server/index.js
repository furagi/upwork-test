'use strict';

const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use('/api*', function(req, res) {
  res.json({
    "page": 1,
    "perPage": 2,
    "from": null,
    "to": null,
    "query": null,
    "sort": "date",
    "order": "asc",
    "_type": "postSearch",
    "_embedded": {
      "posts": [{
          "date": "2017-07-08 21:39:00",
          "message": "Dies ist eine sehr tolle Nachricht",
          "_type": "post"
        }, {
          "date": "2017-07-08 21:39:00",
          "message": "Dies ist eine sehr tolle Nachricht",
          "_type": "post"
      }]
    },
    "_links": {
      "self": {
        "href": "/api/posts?page=1&perPage=20&sort=date&order=asc",
        "method": "GET"
      },
      "next": {
        "href": "/api/posts?page=2&perPage=20&sort=date&order=asc",
        "method": "GET"
      },
      "create": {
        "href": "/api/posts",
        "method": "POST"
      }
    }
  });
});

app.get('/', function(req, res) {
  res.sendFile(path.resolve('client/build/index.html'));
});
app.use('/static', express.static(path.resolve('client/build/static')));
http.createServer(app).listen(4000);
