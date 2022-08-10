const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {type: [String], match: /[A-F][1-9]\d?/},
    price: Number,
    flight: Object  // this will reple after clerification
},);

module.exports = mongoose.model('Tickets', ticketSchema);