const Position = require('../models/Position');
const erorrHandler = require('../utils/errorHandler');

module.exports.getByCategoryId = async (req, res) => {
    try {
        const position = await Position.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(position);
    } catch (e) {
        erorrHandler(res, e);
    }
}

module.exports.create = (req, res) => {
    try {
        
    } catch (e) {
        erorrHandler(res, e);
    }

}

module.exports.remove = (req, res) => {
    try {
        
    } catch (e) {
        erorrHandler(res, e);
    }

}

module.exports.update = (req, res) => {
    try {
        
    } catch (e) {
        erorrHandler(res, e);
    }

}
