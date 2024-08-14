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

exports.createTransaction = (data, uid) => {
    let values = []
    data.map(item => {
        values.push(`('${uid}', '${item.tr_product_id}', '${item.tr_type}', ${item.tr_product_stock}, NOW(), NOW())`)
    })
    const query = `
        INSERT INTO tr_product(tr_id, tr_product_id, tr_type, tr_product_stock, created_at, updated_at)
        VALUES ${values.join(',')}
    `
    const result = execute(query)
    return result
}

exports.getTransaction = async () => {
    const query = `
    SELECT tr.*, p.product_name FROM tr_product tr
    JOIN product p ON tr.tr_product_id = p.id
    `
    const result = execute(query)
    return result
}

exports.updateTransaction = (data) => {
    const query = `UPDATE tr_product SET tr_type = '${data.tr_type}', tr_product_id = '${data.tr_product_id}', tr_product_stock = ${data.tr_product_stock}, updated_at = NOW() WHERE id = ${data.id}`
    const result = execute(query)
    return result
}

exports.deleteTransaction = (id) => {
    const query = `DELETE FROM tr_product WHERE id = ${id}`
    const result = execute(query)
    return result
}

exports.getStock = (id) => {
    const query = `SELECT stock FROM product WHERE id =${id}`
    const result = execute(query)
    return result
}

exports.updateStock = (data) => {
    const query = `UPDATE product SET stock = ${ data.type === "in" ? `stock + ${data.stock}` : `stock - ${data.stock}`} WHERE id = ${data.id}`
    const result = execute(query)
    return result
}