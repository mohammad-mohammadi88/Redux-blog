import jsonServer from 'json-server';
import data from './index.js';
const server = jsonServer.create();
const route = jsonServer.router(data())
const middlewares = jsonServer.defaults()

server.use(jsonServer.bodyParser)
server.use(middlewares)
server.post('/posts/:id/reaction/:type', (req, res) => {
    console.log('first')
    const { id, type } = req.params
    const post = route.db
    .get('posts')
    .find({ id })
    .value()

    post.reactions[type] += 1
    res.jsonp({
        success: true
    })
})

server.use(route)
server.listen(5000, () => {
    console.log('JSON Server is running')
})