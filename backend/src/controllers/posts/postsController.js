const { PostsFunction } = require('../../database/models/postsModel')

const add_post_controller = async (req, res, next) => {

    try {
        const { titulo, img, descripcion, likes } = req.body

        const response = await PostsFunction.addPost(titulo, img, descripcion, likes)

        res.send(response)

    } catch (error) {
        console.log('ERROR!');
        next(error)
    }
}


const get_posts_controller = async (req, res, next) => {

    try {
        const response = await PostsFunction.getPosts()
        res.send(response)

    } catch (error) {
        console.log('ERROR!');
        
        next(error)
    }
}

module.exports = {
    get_posts_controller,
    add_post_controller
}