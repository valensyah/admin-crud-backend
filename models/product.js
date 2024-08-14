const db = require('../config/db')

const execute = (query) => {
    return new Promise((resolve, reject) => {
        db.query(query, (error, results) => {
            if (error) {
                console.log(error)
                reject({ success: false, message: 'Terjadi kesalahan pada sistem! silahkan ulangi kembali. Pastikan koneksi anda stabil' })
            };

            resolve({ success: true, message: 'berhasil mendapatkan data!', data: results })
        })
    })
}

exports.createProduct = (data) => {
    const query = `
        INSERT INTO product(category_id, product_name, image, stock, description, created_at, updated_at)
        VALUES(${data.category_id}, '${data.product_name}', '${data.image}', ${data.stock}, '${data.description}', NOW(), NOW())
    `
    const result = execute(query)
    return result
}

exports.getProduct = async () => {
    const query = `
    SELECT p.*, c.category FROM product p
    JOIN product_category c ON p.category_id = c.id
    `
    const result = execute(query)
    return result
}

exports.updateProduct = (data) => {
    const query = `UPDATE product SET product_name = '${data.product_name}', category_id = '${data.category_id}', description = '${data.description}', stock = ${data.stock}, image = '${data.image}', updated_at = NOW() WHERE id = ${data.id}`
    const result = execute(query)
    return result
}

exports.deleteProduct = (id) => {
    const query = `DELETE FROM product WHERE id = ${id}`
    const result = execute(query)
    return result
}