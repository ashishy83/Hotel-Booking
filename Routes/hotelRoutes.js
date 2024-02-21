const express = require('express');
const router = express.Router();
const hotelController = require('../Controller/hotelController');

router.post('/addData',hotelController.addhotelsData);

router.get('/allHotels',hotelController.getAllhotels);
router.get('/:id',hotelController.gethotelsByID);

module.exports = router;
 