
// import module `express`
const express = require('express');

const addcarController = require('../controllers/addcarController.js');

const searchController = require('../controllers/searchController.js');

const homeController = require('../controllers/homeController.js');

const registerController = require('../controllers/registerController.js');

const userController = require('../controllers/userController.js');

const buildController = require('../controllers/buildController.js');

const contactController = require('../controllers/contactController.js');

const deleteController = require('../controllers/deleteController.js');

const updateController = require('../controllers/updateController.js');

const app = express();

app.get('/addcar', addcarController.getAddCar);

app.post('/addcar', addcarController.postAddCar);

app.get('/search', searchController.getCars);

app.get('/', homeController.getHome);

app.get('/home', homeController.getHome);

app.get('/register', registerController.getRegister);

app.get('/getCheckID', registerController.getCheckID);

app.get('/user/:uName', userController.getUser);

app.get('/build', buildController.getBuild);

app.get('/contact', contactController.getContact);

app.get('/delete', deleteController.getDelete);

app.post('/delete', deleteController.postDelete);

app.get('/update/:name', updateController.getUpdate);

app.post('/update/:name', updateController.postUpdate);


// exports the object `app` (defined above)
// when another script exports from this file
module.exports = app;
