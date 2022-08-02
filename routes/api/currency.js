const express = require('express');

const getCurrency = require('../../controllers/currency/currency');
const { ctrlWrapper } = require('../../middlewares');

const router = express.Router();

router.get('/', ctrlWrapper(getCurrency));

module.exports = router;
