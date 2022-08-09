const mongoose = require('mongoose');



const destinationSchema = new mongoose.Schema({

    airport: {
        type: String,
        defualt: 'DEN',
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date

})


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
    destinations: [destinationSchema],
});


module.exports = mongoose.model('Flight', flightSchema);