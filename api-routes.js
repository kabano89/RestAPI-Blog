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

// Article routes
// router.route('/articles')
//     .get(articleController.index)
//     .post(articleController.new);

router.route('/articles').get(articleController.index);

router.route('/articles').post(articleController.new);


router.route('/articles/:article_id').get(articleController.view);

router.route('/articles/:article_id').patch(articleController.update);

router.route('/articles/:article_id').put(articleController.update);

router.route('/articles/:article_id').delete(articleController.delete);


// Export API routes
module.exports = router;