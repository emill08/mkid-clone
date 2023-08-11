const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const {errorHandler} = require('./middlewares/errorHandler')
const router = require('./routes')
// const Controller = require('./controllers/controller')
// const authentication = require('./middlewares/authentication')
// const authorization = require('./middlewares/authorization')


app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use('/', router)

// app.post('/register', Controller.adminRegister)
// app.post('/register-customer', Controller.custRegister)
// app.post('/login', Controller.login)
// app.use(authentication)
// app.get('/categories', Controller.fetchCategories)
// app.get('/products', Controller.fetchProducts)
// app.get('/products/:id', Controller.getOneProduct)

// app.use(authorization)
// app.post('/products', Controller.addProduct)
// app.put('/products/:id', Controller.editProduct)
// app.delete('/products/:id', Controller.deleteProduct)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})