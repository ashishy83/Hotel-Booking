const express = require('express');
const router = express.Router();
const hotelController = require('../Controller/hotelController');

router.post('/hotels/addData',hotelController.addhotelsData);

router.get('/hotels/allHotels',hotelController.getAllhotels);
router.get('/hotels/:id',hotelController.gethotelsByID);

module.exports = router;
 