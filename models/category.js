const db = require('../config/db')

const execute = (query) => {
    return new Promise((resolve, reject) => {
        db.query(query, (error, results) => {
            console.log(error)
            if (error) {
                reject({ success: false, message: 'Terjadi kesalahan pada sistem! silahkan ulangi kembali. Pastikan koneksi anda stabil' })
            };

            resolve({ success: true, message: 'berhasil!', data: results })
        })
    })
}

exports.createCategory = (data) => {
    const query = `
        INSERT INTO product_category (category, description, created_at, updated_at)
        VALUES ('${data.category}', '${data.description}', NOW(), NOW())
    `
    const result = execute(query)
    return result
}

exports.getCategory = () => {
    const query = `SELECT * FROM product_category`
    const result = execute(query)
    return result
}

exports.updateCategory = (data) => {
    const query = `UPDATE product_category SET category = '${data.category}', description = '${data.description}', updated_at = NOW() WHERE id = ${data.id}`
    const result = execute(query)
    return result
}

exports.deleteCategory = (id) => {
    const query = `DELETE FROM product_category WHERE id = ${id}`
    const result = execute(query)
    return result
}