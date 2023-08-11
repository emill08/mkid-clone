const { User } = require('../models/index')

const authorization = async (req, res, next) => {
    try {
        const { id } = req.user;
        let user = await User.findByPk(id)
        if (user.role !== 'Admin') {
            throw { name: 'Unauthorized' };
        }
        next();
    } catch (err) {
        next(err);
    }
}

module.exports = authorization