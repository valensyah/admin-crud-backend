const db = require('../config/db')

const execute = (query) => {
    return new Promise((resolve, reject) => {
        db.query(query, (error, results) => {
            if (error) {
                console.log(error)
                reject({ success: false, message: 'Terjadi kesalahan pada sistem! silahkan ulangi kembali. Pastikan email dan password sudah sesuai' })
            };

            resolve({ success: true, message: 'berhasil!', data: results })
        })
    })
}

exports.login = (data) => {
    const { email, password } = data
    const query = `SELECT * FROM user WHERE email = '${email}' AND password = '${password}'`
    const result = execute(query)
    return result
}

exports.getAll = () => {
    const query = 'SELECT * FROM user'
    const result = execute(query)
    return result
}

exports.register = (data) => {
    const query = `
        INSERT INTO user(first_name, last_name, email, password, birth_date, gender, created_at, updated_at)
        VALUE('${data.first_name}', '${data.last_name}', '${data.email}', '${data.password}', '${data.birth_date}', '${data.gender}', NOW(), NOW())
    `
    const result = execute(query)
    return result
}

exports.updateUser = (data) => {
    const query = `
        UPDATE user SET 
        first_name = '${data.first_name}', 
        last_name = '${data.last_name}', 
        email = '${data.email}', 
        password = '${data.password}', 
        birth_date = '${data.birth_date}', 
        gender = '${data.gender}', 
        updated_at = NOW()
    `
    const result = execute(query)
    return result
}