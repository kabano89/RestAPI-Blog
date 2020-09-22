// articleController.js

// Import article model
Article = require('./articleModel');// Handle index actions
exports.index = function (req, res) {
    Article.get(function (err, articles) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Articles retrieved successfully",
            data: articles
        });
    });
};

// Handle create article actions
exports.new = function (req, res) {
    var article = new Article();
    article.title = req.body.title ? req.body.title : article.title;
    article.content = req.body.content;
        
    // save the contact and check for errors
    article.save(function (err) {
        
    res.json({
            message: 'New article created!',
            data: article
        });
    });
};

// Handle view article info
exports.view = function (req, res) {
    Article.findById(req.params.article_id, function (err, article) {
        if (err)
            res.send(err);
        res.json({
            message: 'Article details loading..',
            data: article
        });
    });
};

// Handle update article info
exports.update = function (req, res) {Article.findById(req.params.article_id, function (err, article) {
        if (err)
            res.send(err);
        article.title = req.body.title ? req.body.title : article.title;
        article.content = req.body.content;
        
        // save the article and check for errors
        article.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Article Info updated',
                data: article
            });
        });
    });
};

// Handle delete contact
exports.delete = function (req, res) {
    Article.remove({
        _id: req.params.article_id
    }, function (err, article) {
        if (err)
            res.send(err);res.json({
            status: "success",
            message: 'Article deleted'
        });
    });
};