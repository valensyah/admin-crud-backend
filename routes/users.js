var express = require('express');
var router = express.Router();
const user = require('../controllers/userController')

/* GET users listing. */
router.post('/', user.login);
router.get('/all', user.getAllUser);
router.post('/create', user.register);
router.post('/update', user.update);

module.exports = router;
