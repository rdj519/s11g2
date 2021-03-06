
// import module `database` from `../models/db.js`
const db = require('../models/db.js');

// import module `User` from `../models/UserModel.js`
const User = require('../models/UserModel.js');

// defines an object which contains functions executed as callback
// when a client requests for `profile` paths in the server
const userController = {

    // executed when the client sends an HTTP GET request `/profile/:idNum`
    // as defined in `../routes/routes.js`
    getUser: function (req, res) {

        if(req.session.uName) {

            var details = {

                flag: true,
                uName: req.session.uName

            }
        }

        else {

            var details = {

                flag: false

            }
        }

        // query where `idNum` is equal to URL parameter `idNum`
        var query = {uName: req.params.uName};

        // fields to be returned
        var projection = 'fName lName uName email bDay';

        // calls the function findOne()
        // defined in the `database` object in `../models/db.js`
        // this function searches the collection `users`
        // based on the value set in object `query`
        // the third parameter is a string containing the fields to be returned
        // the fourth parameter is a callback function
        // this called when the database returns a value
        // saved in variable `result`
        db.findOne(User, query, projection, function(result) {

            // if the user exists in the database
            // render the profile page with their details
            if(result != null) {

                details.fName = result.fName;
                details.lName = result.lName;
                details.uuName = result.uName;
                details.email = result.email;
                details.bDay = result.bDay;

                // render `../views/profile.hbs`
                res.render('user', details);
            }
            // if the user does not exist in the database
            // render the error page
            else {
                // render `../views/error.hbs`
                res.render('error');
            }
        });
    }
}

// exports the object `profileController` (defined above)
// when another script exports from this file
module.exports = userController;
