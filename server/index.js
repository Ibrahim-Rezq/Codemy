const functions = require('firebase-functions')

const express = require('express')
const cors = require('cors')

const stripe = require('stripe')(
    'sk_test_51LHoCuCajsSYQy' +
        't67grT3g33gUGpf5fLLAtD0xHQN' +
        'T2WLFvaxgYSNgIpgsndNauV4tzRCzIGCUwtLzpG0l14mAE' +
        'U00FAaS0djH',
)

// API

// - App config
const app = express()
// Add headers before the routes are defined

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true)

    // Pass to next layer of middleware
    next()
})

// Middlewares
app.use(cors({ origin: '*' }))
app.use(express.json())

// API routes
app.get('/', (req, res) => {
    res.status(200).send('Hello')
})

app.post('/payment/create', async (req, res) => {
    const total = req.query.total
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // in subunits
        currency: 'egp', // currencies
    })
    res.status(201).send({ clientSecret: paymentIntent.client_secret })
})

exports.app = functions.https.onRequest(app)
