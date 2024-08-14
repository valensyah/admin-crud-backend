const user = require('../models/user')
const jwt = require('jsonwebtoken')

exports.login = async (req, res) => {
    try {
        const log = await user.login(req.body)
        if (!log.success) {
            return res.json({
                success: false,
                message: log.message
            })
        }
        req.session.user = log.data

        const token = jwt.sign({
            userId: log.data.id
        }, process.env.jwt_secret, { expiresIn: 60 * 60 * 24 })

        return res.status(200).json({ message: log.message, data: log.data, token });
    } catch (error) {
        return res.status(500).json({ message: error.message, data: [] })
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const data = await user.getAll()
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: error.message, data: [] })
    }
}

exports.register = async (req, res) => {
    try {
        const data = await user.register(req.body)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: error.message, data: [] })
    }
}

exports.update = async (req, res) => {
    try {
        const data = await user.updateUser(req.body)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: error.message, data: [] })
    }
}