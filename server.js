const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/properties', require('./routes/property'));


app.get("/",(req,res)=>{
    app.use(express.static(path.resolve(__dirname,"frontend","build")));
    res.sendFile(path.resolve(__dirname,"frontend","build","index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
