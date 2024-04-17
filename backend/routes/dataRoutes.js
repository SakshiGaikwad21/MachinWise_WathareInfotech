const express = require('express');
const router = express.Router();
const Data = require('../models/dataModel');

// GET all data
router.get('/', async (req, res) => {
    try {
        const data = await Data.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST new data
router.post('/', async (req, res) => {
    const data = new Data({
        value: req.body.value
    });
    try {
        const newData = await data.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
