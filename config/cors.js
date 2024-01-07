const cors = require('cors')

const whitelist = [
  'http://localhost:3000', // development
  'frostfire.com' // production
];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};


const appCors = cors(corsOptions)


module.exports = appCors
