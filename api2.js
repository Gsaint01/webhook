const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post('/3161c6a7408573188b5e25f99fd946f31d3067fa', (req, res) => {
    const event = req.body;

    // Process the event
    console.log('Received event:', event);

    // Respond with a 200 OK status
    res.status(200).send('Event received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
