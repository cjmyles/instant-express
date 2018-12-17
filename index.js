const express = require('express');
const InstantAPI = require('instant-express-api');
const config = require('config');
const functions = require('firebase-functions');

// Create our app
const app = express();

// Initialise InstantAPI
const instant = InstantAPI.initialize(config.get('server'));

// Set up CORS
app.use(instant.cors());

// Initialise firebase
// Note: this requires a Service Account Key (see the README for more information)
firebase = instant.firebase();

// Set up the routes
app.use(instant.routes());

// Export the application
exports.app = functions.https.onRequest(app);
