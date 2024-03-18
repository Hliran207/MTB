const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');

const app = express();
//dataBase connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Database Connected'))
.catch(()=> console.log('Database Not Connected'))

//middle
app.use(express.json())
const reviewRoutes = require('./routes/reviews');
app.use('/api/reviews', reviewRoutes);
app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));

