const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thaifood.jpg'
        }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/codingcat.jpg'
        }]
    res.render('places/index', {places})
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router
