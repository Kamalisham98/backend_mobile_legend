const cors = require('cors')

const whitelist = [
    'http://localhost:3001', // development
    'frostfire.com' // production
]

const corsOptions = {
    // NOTE: all still can access
    origin: whitelist
}

const appCors = cors(corsOptions)

module.exports = appCors
