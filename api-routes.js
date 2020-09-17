// api-routes.js
// Initialize express router
let router = require('express').Router();

//
router.get('/', (req, res) => {

    res.json({
        message: 'Welcome Again to my blog rest api'
    });

});

// Import contact controller
var articleController = require('./articleController');// Article routes
router.route('/articles')
    .get(articleController.index)
    .post(articleController.new);

router.route('/articles/:article_id')
    .get(articleController.view)
    .patch(articleController.update)
    .put(articleController.update)
    .delete(articleController.delete);// Export API routes
module.exports = router;