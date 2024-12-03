import express from 'express'
import path from 'path'


export const startServer = (options) => {
    const {port, publicPath = 'public'} = options
    console.log(port, publicPath)


    const app = express()


    //para poder usar middlewares se usa "use"
    app.use(express.static(publicPath))


    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + '../../../public/index.html')
        res.sendFile(indexPath)

    })


    app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`)
    })
}

