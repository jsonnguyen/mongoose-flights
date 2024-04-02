const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight, 
    create,
    show
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index', { title: 'All Flights', flights });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect('/flights');
    } catch (error) {
        console.log(error);
        res.render('flights/new', { errorMsg: error.message});
    }
}

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    const tickets = await Ticket.find({ flight: req.params.id })
    res.render('flights/show', { title: 'Flight Detail', flight, tickets })
}