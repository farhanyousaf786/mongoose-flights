const Flight = require('../models/flights');


module.exports = {
    create,

}

function create(req, res) {

    console.log(req.params.id, "<------ params movie id");

    console.log(req.body, "<------ the content of the form aka destinations");

    Flight.findById(req.params.id, function (err, flightDcument) {

        console.log(flightDcument, "<------ the flight document");
        flightDcument.destinations.push(req.body);
        flightDcument.save(function (err) {

            res.redirect(`/flights/${req.params.id}`);
        })
    })

}

