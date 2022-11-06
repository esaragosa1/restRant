const router = require('express').Router()

//POST
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/smallPizza.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/tacos.jpeg'
  }]  
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router
