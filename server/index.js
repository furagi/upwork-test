'use strict';

const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('*', function(req, res) {
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
http.createServer(app).listen(3200);
