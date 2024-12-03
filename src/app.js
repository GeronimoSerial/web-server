import {envs} from './config/env.js'
import {startServer} from './server/server.js'

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

