const Fastify = require('fastify')
const bcrypt = require('bcrypt')

const hostname = '0.0.0.0'
const port = 4000

const app = Fastify()
app.listen(port, hostname, () => {
    console.log(`inside create server #port= ${port}`)
})

app.get('/', (request, reply) => {
    reply.send('OK')
})

app.get('/bcrypt/:password', async (request, reply) => {
    const { password } = request.params
    // console.log('password ->', password)

    const setRounds = 5
    const salt = await bcrypt.genSalt(setRounds)  
    const passwordHashed = await bcrypt.hash(password, salt)
    // console.log('passwordHashed ->', passwordHashed)

    reply.send(passwordHashed)
})