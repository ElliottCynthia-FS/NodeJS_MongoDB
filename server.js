require('dotenv').config();
const connectDB = require('./api/db/config');
const http = require('http');
const app = require('./app');

connectDB();

const PORT = process.env.PORT || 3000;

// http.createServer(app).listen(process.env.port || 3000, () => console.log(`Server running on port ${process.env.port}`));

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`);
});

