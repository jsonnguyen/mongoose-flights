const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

async function create(req, res) {
    req.body['flight'] = req.params.id;
    try {
        await Ticket.create(req.body);
        res.redirect(`/flights/${req.params.id}`)
    } catch (error) {
        console.log(error);
    }
}

function newTicket(req, res) {
    const flightId = req.params.id;
    console.log(flightId)
    res.render(`tickets/new`, { title: 'New Ticket', errorMsg: '', flightId })
}