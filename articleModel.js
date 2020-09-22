// articleModel.js
var mongoose = require('mongoose');

// Setup schema
var articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export article model
var Article = module.exports = mongoose.model('article', articleSchema);

module.exports.get = function (callback, limit) {
    Article.find(callback).limit(limit);
}