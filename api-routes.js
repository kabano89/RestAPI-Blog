// api-routes.js
// Initialize express router
let router = require('express').Router();

//
router.get('/', (req, res) => {
    res.json({
        message: 'Welcome Again to my blog rest api'
    });
});

// Import article controller
var articleController = require('./articleController');
//import comment controller
var commentController = require('./commentController');

// Article routes
router.route('/articles').get(articleController.index);
router.route('/articles').post(articleController.new);

// Comment routes
router.route('/articles/:article_id/comment').get(commentController.index);
router.route('/articles/:article_id/comment').post(commentController.new);

//articles crud
router.route('/articles/:article_id').get(articleController.view);
router.route('/articles/:article_id').patch(articleController.update);
router.route('/articles/:article_id').put(articleController.update);
router.route('/articles/:article_id').delete(articleController.delete);

//comment crud
router.route('/articles/:article_id/comment/:comment_id').get(commentController.view);
router.route('/articles/:article_id/comment/:comment_id').patch(commentController.update);
router.route('/articles/:article_id/comment/:comment_id').put(commentController.update);
router.route('/articles/:article_id/comment/:comment_id').delete(commentController.delete);


// Export API routes
module.exports = router;