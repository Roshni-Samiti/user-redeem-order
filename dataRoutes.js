// routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const { processInputData } = require('./dataController.js'); // Adjust the path

// Define a route for handling POST requests
router.post('/api/data', (req, res) => {
    const requestData = req.body;
    const processedData = processInputData(requestData);
    res.json(processedData);
});

module.exports = router;
