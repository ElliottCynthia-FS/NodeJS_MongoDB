const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const authorRoutes = require("../api/routes/authorRoutes");
const bookRoutes = require("../api/routes/bookRoutes");
//const routeHandler = require('../routes');

// Middleware for logging
// When you pass in 'dev' as the argument to morgan, it will log out additional information about the request to the console only in dev environment.
app.use(morgan('dev'));
// parsing middleware
app.use(express.urlencoded({
    extended: true
}));
// middleware that all requests are json
app.use(express.json())

// middleware to handle CORS policy
app.use((req, res, next) => {
    // bypass CORS policy
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header","Origin, X-Requested-With, Content-Type, Accept, Authorization");
    // browser will always send an OPTIONS request first to check if the server allows a request from that origin
    // set conditions 
    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "POST, PUT, GET, PATCH, DELETE")
    }
    next();
});

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "Service is UP!",
        method: req.method,
    })
});

app.use("/authors", authorRoutes);
app.use("/books", bookRoutes);
//app.use('/api/v1', routeHandler);

app.use((req, res, next) => {
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status,
            method: req.method,
        }
    })
});

module.exports = app;