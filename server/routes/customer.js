const router = require("express").Router()
const Controller = require('../controllers/controller')
const authentication = require('../middlewares/authentication')

// router.post('/register', Controller.custRegister)
// router.post('/login', Controller.login)

// router.use(authentication)

router.get('/categories', Controller.fetchCategories)
router.get('/categories/:id', Controller.getOneCategory)
router.get('/products', Controller.fetchProducts)
router.get('/products/:id', Controller.getOneProduct)


module.exports = router