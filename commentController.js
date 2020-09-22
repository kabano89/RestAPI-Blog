// commentController.js

// Import comment model
Comment = require('./commentModel');
// Handle index actions
exports.index = function (req, res) {
    Comment.get(function (err, comments) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Comments retrieved successfully",
            data: comments
        });
    });
};

// Handle create article actions
exports.new = function (req, res) {
    var comment = new Comment();
    comment.article_id = req.body.article_id ? req.body.article_id : article.article_id;
    comment.names = req.body.names;
    comment.email = req.body.email;
    comment.comment = req.body.comment;
        
    // save the contact and check for errors
    comment.save(function (err) {
        
    res.json({
            message: 'New comment created!',
            data: comment
        });
    });
};

// Handle view comment info
exports.view = function (req, res) {
    Comment.findById(req.params.comment_id, function (err, comment) {
        if (err)
            res.send(err);
        res.json({
            message: 'Comment details loading..',
            data: comment
        });
    });
};

// Handle update comment info
exports.update = function (req, res) {Comment.findById(req.params.comment_id, function (err, comment) {
        if (err)
            res.send(err);
        comment.article_id = req.body.article_id ? req.body.article_id : article.article_id;
        comment.names = req.body.names;
        comment.email = req.body.email;
        comment.comment = req.body.comment;
        
        // save the article and check for errors
        comment.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Comment Info updated',
                data: comment
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Comment.remove({
        _id: req.params.comment_id
    }, function (err, comment) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Comment deleted'
        });
    });
};