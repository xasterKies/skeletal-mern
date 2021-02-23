import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
import mon

const CURRENT_WORKING_DIR = process.cwd()

const app = express()

devBundle.compile(app)

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

app.get('/', (req, res) => {
    res.status(200).send(template())
})

let port = process.env.PORT || 3000

app.listen(port, function onStart(err) {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s. ', port)
})