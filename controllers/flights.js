const Flight = require('../models/flights');

module.exports = {
    new: newFlight,
    create,
    index,
}

function newFlight(req, res) {
    res.render('flights/new.ejs');
}


function index(req, res) {
    Flight.find({}, function (err, allOfTheFlightsInTheDatabase) {
        console.log(allOfTheFlightsInTheDatabase, "<<-- All the flights");
        if (err) {
            res.send("We have error while trying to find movies in db");
        }
        res.render('flights/index.ejs', {
            flights: allOfTheFlightsInTheDatabase,
        });
    });
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