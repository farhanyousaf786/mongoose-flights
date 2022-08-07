const Flight = require('../models/flights');


module.exports = {
    new: newFlight,
    create,
}

function newFlight(req, res) {

    res.render('flights/new.ejs');

}

function create(req, res) {

    console.log(req.body, "< -- this is we enter in form")


    Flight.create(req.body, function (err, flightDocCreateInDB) {

        if (err) {

            console.log(err, "<---  this is error bro");
            return res.render('flights/new.ejs');

        }


        console.log(flightDocCreateInDB, "< -- this fligh in DB bro");

        res.send("Response from create function for movie");




    })







} 