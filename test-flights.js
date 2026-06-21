import handler from './api/flights.js';

const req = {
    method: 'POST',
    body: {
        from: 'Delhi',
        to: 'Mumbai',
        date: '2026-07-15',
        passengers: 1
    }
};

const res = {
    status: function(code) {
        console.log('Status:', code);
        return this;
    },
    json: function(data) {
        console.log('JSON:', data);
        return this;
    }
};

handler(req, res).catch(console.error);
