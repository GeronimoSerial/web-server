const {envs} = require('./config/env')
const {startServer} = require('./server/server')

const main = () => {
    startServer({
        port: envs.PORT,
        publicPath: envs.PUBLIC_PATH
    })
}

// Funcion agnostica autoconvocada
// agnostica: Porque no tiene nombre
// autoconvocada: Porque se ejecuta automaticamente

(async () => {
    main()
})()

