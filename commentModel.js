// commentModel.js
var mongoose = require('mongoose');

// Setup schema
var commentSchema = mongoose.Schema({
    article_id: {
        type: String,
        required: true
    },
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Export comment model
var Comment = module.exports = mongoose.model('comment', commentSchema);

module.exports.get = function (callback, limit) {
    Comment.find(callback).limit(limit);
}