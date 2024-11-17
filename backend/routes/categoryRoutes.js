const express = require('express');
const Category = require('../models/Category');
const auth = require('../middleware/auth'); // Import the auth middleware
const router = express.Router();

// Route to add a new category
router.post('/add', auth, async (req, res) => {
    const { name, image } = req.body;
    try {
        const newCategory = new Category({ name, image });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error adding category', error });
    }
});

// Route to get all categories
router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error });
    }
});

module.exports = router;