const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const secret = 'halobandung'
//
function hashPassword(password) {
    return bcrypt.hashSync(password, 10)
}
function comparePassword(password, hashed) {
    return bcrypt.compareSync(password, hashed)
}

function signToken(payload) {
    return jwt.sign(payload, secret)
}

function verifyToken(token) {
    return jwt.verify(token, secret)
}

module.exports = { hashPassword, comparePassword, signToken, verifyToken }