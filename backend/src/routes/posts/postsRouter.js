const router = require('express').Router()
const { get_posts_controller, add_post_controller } = require('../../controllers/posts/postsController')

router.get('/get-all', get_posts_controller)

router.post('/add', add_post_controller)

module.exports = router