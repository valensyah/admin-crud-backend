const tr = require('../models/transaction')
const { v4: uuidv4 } = require('uuid');

exports.create = async (req, res) => {
    try {
        req.body.data.forEach(async (item) => {
            if (item.tr_type === "Stock In") {
                const addStock = await tr.updateStock({ type: "in", stock: item.tr_product_stock, id: item.tr_product_id })
                if (addStock.success === false) {
                    res.status(500).json(addStock)
                }
            }

            if (item.tr_type === "Stock Out") {
                const getStock = await tr.getStock(item.tr_product_id)
                if (getStock.data[0].stock < item.tr_product_stock) {
                    return res.status(200).json({ success: false, message: "Jumlah Stock Out tidak boleh lebih besar dari stock yang tersedia!", data: [] })
                }
                const reduceStock = await tr.updateStock({ type: "out", stock: item.tr_product_stock, id: item.tr_product_id })
                if (reduceStock.success === false) {
                    res.status(500).json(addStock)
                }
            }
        })
        const data = await tr.createTransaction(req.body.data, uuidv4())
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.transactionAll = async (req, res) => {
    try {
        const result = await tr.getTransaction()
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Terjadi kesalahan pada sistem!' })
    }
}

exports.update = async (req, res) => {
    try {
        const data = await tr.updateTransaction(req.body)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const data = await tr.deleteTransaction(req.body.id)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json(error)
    }
}