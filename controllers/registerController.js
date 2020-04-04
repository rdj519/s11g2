
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// defines an object which contains functions executed as callback
// when a client requests for `profile` paths in the server
const registerController = {

    // executed when the client sends an HTTP GET request `/profile/:idNum`
    // as defined in `../routes/routes.js`
    getRegister: function (req, res) {

        res.render('register');
    }
}

// exports the object `profileController` (defined above)
// when another script exports from this file
module.exports = registerController;
