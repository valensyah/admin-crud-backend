var express = require('express');
var router = express.Router();
const product = require('../controllers/productController')
const category = require('../controllers/categoryController')
const tr = require('../controllers/trController')
const upload = require('../config/upload');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', product.productAll)
router.post('/product/create', upload.single('image'), product.create)
router.post('/product/edit', upload.single('image'), product.update)
router.post('/product/delete', product.delete)

router.get('/category', category.categoryAll)
router.post('/category/create', category.create)
router.post('/category/edit', category.update)
router.post('/category/delete', category.delete)

router.get('/tr', tr.transactionAll)
router.post('/tr/create', tr.create)
router.post('/tr/edit', tr.update)
router.post('/tr/delete', tr.delete)

module.exports = router;
