const mongoose = require('mongoose');

var oneYearFromNow = new Date();


const flightSchema = new mongoose.Schema({

    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },

    airport: {
        type: String,
        defualt: 'DEN',
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
    },

    flightNo: Number,

    departs: {
    type: Date,
    defualt: oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1),
   },

});


module.exports = mongoose.model('Flight', flightSchema);