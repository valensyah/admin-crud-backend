const products = require('../models/product')

exports.create = async (req, res) => {
    try {
        console.log(req.body, req.file)
        const imagePath = req.file ? req.file.filename : null; // Get the uploaded file path
        const productData = {
            ...req.body,
            image: imagePath // Add the image path to the product data
        };
        const data = await products.createProduct(productData); // Save product data to the database
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.productAll = async (req, res) => {
    try {
        const result = await products.getProduct()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Terjadi kesalahan pada sistem!' })
    }
}

exports.update = async (req, res) => {
    try {
        const imagePath = req.file ? req.file.filename : null; // Get the uploaded file path
        const productData = {
            ...req.body,
            image: imagePath // Add the image path to the product data
        };
        const data = await products.updateProduct(productData)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const data = await products.deleteProduct(req.body.id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}