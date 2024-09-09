const database = require('../dbConfig')

const addPost = async (titulo, img, descripcion, likes) => {

    try {

        const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, $4) RETURNING *"
        const values = [titulo, img, descripcion, likes]

        const result = await database.query(consulta, values)

        if (result.rowCount) {

            return {
                msg: 'Post creado',
                data: result.rows[0]
            }

        } else {
            return {
                msg: 'Post no agregado',
                data: []
            }
        }

    } catch (error) {

        throw error
    }

}

const getPosts = async () => {

    try {

        const consulta = "SELECT * FROM posts"

        const { rows } = await database.query(consulta)

        if (rows.length) {

            return {
                msg: 'lista de Posts',
                data: rows
            }

        } else {

            return {
                msg: 'No hay Posts para mostrar',
                data: []
            }
        }

    } catch (error) {
        throw error
    }
}

const PostsFunction = {
    addPost,
    getPosts
}


module.exports = { PostsFunction }