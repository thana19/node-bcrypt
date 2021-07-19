const Fastify = require('fastify')

const hostname = '0.0.0.0'
const port = 4000

const app = Fastify()
app.listen(port, hostname, () => {
    console.log(`inside create server #port= ${port}`)
})

app.get('/', (request, reply) => {
    reply.send('OK')
})