// gatewayservice/gateway-service.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

const authServiceUrl = 'http://localhost:3002'
const userServiceUrl = 'http://localhost:3001'

app.use(express.json());

// Define routes for the gateway service
app.post('/login', async (req, res) => {
  try {
    // Forward the login request to the authentication service
    const authResponse = await axios.post(authServiceUrl+'/login', req.body);
    res.json(authResponse.data);
  } catch (error) {
    res.status(error.response.status).json({ error: error.response.data.error });
  }
});

app.post('/adduser', async (req, res) => {
  try {
    // Forward the add user request to the user service
    const userResponse = await axios.post(userServiceUrl+'/adduser', req.body);
    res.json(userResponse.data);
  } catch (error) {
    console.log(error)
    res.status(error.response.status).json({ error: error.response.data.error });
  }
});

// Start the gateway service
app.listen(port, () => {
  console.log(`Gateway Service listening at http://localhost:${port}`);
});
