const router = require("express").Router()
const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post('/login', Controller.login)

router.use(authentication)

router.get('/categories', Controller.fetchCategories)

router.get('/products', Controller.fetchProducts)
router.get('/products/:id', Controller.getOneProduct)
router.get('/categories/:id', Controller.getOneCategory)

router.use(authorization)
router.post('/register', Controller.adminRegister)

router.post('/products', Controller.addProduct)
router.put('/products/:id', Controller.editProduct)
router.delete('/products/:id', Controller.deleteProduct)

router.post('/categories', Controller.addCategory)
router.put('/categories/:id', Controller.editCategory)
router.delete('/categories/:id', Controller.deleteCategory)


module.exports = router