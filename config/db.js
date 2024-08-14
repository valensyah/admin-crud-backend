const db = require('mysql')

const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'admin-dt'
})

connection.connect((error) => {
    if (error) {
        console.log("Gagal menghubungkan ke database!")
    } else {
        console.log("Behasil terhubung!")
    }
})

module.exports = connection