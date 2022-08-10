const Flight = require('../models/flights');
const Ticket = require('../models/tickets');

module.exports = {
    new: newFlight,
    create,
    index,
    show,
}

function newFlight(req, res) {
    res.render('flights/new.ejs');
}


function show(req, res,) {

    Flight.findById(req.params.id, function (err, flight) {

        console.log(flight, "<------ after adde the destination >>>>>>>");

        Ticket.find({_id: {$nin: flight.seat}}, function (err, tickets) {

            console.log(tickets, "<------ after add ticket <><><");

             res.render('flights/show', {
            title: "Flight Detail", 
            flight: flight,
            tickets: tickets,

        });
        });
    });
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
            console.log(err, "<---  this is error");
            return res.render('flights/new.ejs');
        }
        console.log(flightDocCreateInDB, "< -- this fligh in DB bro");

        res.redirect(`/flights/${flightDocCreateInDB._id}`);
    })
}