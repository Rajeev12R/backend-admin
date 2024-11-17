const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/subcategories', subcategoryRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT || 5000, () => {
            console.log('Server is running...');
            console.log('MongoDB Connnected...');
        });
    })
    .catch(err => console.error('MongoDB connection error:', err));