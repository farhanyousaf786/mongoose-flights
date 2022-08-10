const ticket = require('../models/tickets');
const Flight = require('../models/flights');

module.exports = {
    new: newTicket,
    create,
    addToTicket,
};



function addToTicket(req, res) {


    console.log("<><><><><******************************************")


    Flight.findById(req.params.id), function (err, flightDoc) {

        flightDoc.seat.push(req.body.ticketId);

        flightDoc.save(

            function (err) {

                res.redirect(`/flights/${flightDoc._id}`)
            }


        );
    }

}

function create(req, res) {
    ticket.create(req.body, function (err, ticket) {
        res.redirect('/tickets/new');
    });
}

function newTicket(req, res) {
    ticket.find({}, function (err, ticket) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            ticket
        });
    })
}