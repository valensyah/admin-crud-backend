const category = require('../models/category')

exports.create = async (req, res) => {
    try {
        const data = await category.createCategory(req.body)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.categoryAll = async (req, res) => {
    try {
        const data = await category.getCategory()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.update = async (req, res) => {
    try {
        console.log(req.body)
        const data = await category.updateCategory(req.body)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const data = await category.deleteCategory(req.body.id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}