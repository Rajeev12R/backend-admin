const express = require('express');
const SubCategory = require('../models/SubCategory');
const auth = require('../middleware/auth'); // Import the auth middleware
const router = express.Router();

// Route to add a new subcategory
router.post('/add', auth, async (req, res) => {
    const { name, image, categoryId } = req.body;
    try {
        const newSubCategory = new SubCategory({ name, image, categoryId });
        await newSubCategory.save();
        res.status(201).json(newSubCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error adding subcategory', error });
    }
});

// Route to get all subcategories
router.get('/', async (req, res) => {
    try {
        const subCategories = await SubCategory.find().populate('categoryId');
        res.json(subCategories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching subcategories', error });
    }
});

module.exports = router;