const ticket = require('../models/tickets');
const Movie = require('../models/flights');

module.exports = {
  new: newTicket,
  create
};

function create(req, res) {
  // Need to "fix" date formatting to prevent day off by 1
  // This is due to the <input type="date"> returning the date
  // string in this format:  "YYYY-MM-DD"
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  
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