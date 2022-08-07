const mongoose = require('mongoose');

var oneYearFromNow = new Date();


const flightSchema = new mongoose.Schema({

    airline: [String],
    airport: { type: [String], defualt: 'DEN' },
    flightNo: Number,
    departs: { type: Date, defualt: oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1) },

});


mod = mongoose.model('Flight', flightSchema);