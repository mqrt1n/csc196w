'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', function(req, res) {
    var r = Number(req.params['r']);
    var a = Math.PI * r * r;
    var c = Math.PI * 2 * r;
    res.type('json');
    res.json({"area": a, "circumference": c});
});

// define endpoint for exercise 2 here
app.get('/hello/name', function(req, res) {
    if (!req.query['first'] && !req.query['last']) {
        res.type('text').status(400).send("Missing Required GET parameters: first, last");
    }
    else if (!req.query['first']) {
        res.type('text').status(400).send("Missing Required GET parameters: first");
    }
    else if (!req.query['last']) {
        res.type('text').status(400).send("Missing Required GET parameters: last");
    }
    else 
    {
        var firstName = req.query['first'];
        var lastName = req.query['last'];
        res.type('text');
        res.send("Hello " + firstName + " " + lastName);
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);