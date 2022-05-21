const express = require('express');
const router = express.Router();

//Required api's 
const User = require('./Routes/User')
const watchList = require('./Routes/watchList')
const scraping = require('./Routes/scraping')
const cinema = require('./Routes/cinema')



/*********Main Api**********/
router.use('/user',User);
router.use('/watchlist', watchList);
router.use('/scraping', scraping);
router.use('/cinema', cinema);



module.exports = router;