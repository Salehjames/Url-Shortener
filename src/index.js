// index.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Allow incoming requests from all network interfaces
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
