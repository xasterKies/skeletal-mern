import express from 'express'
import devBundle from './devBundle'
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'

const CURRENT_WORKING_DIR = process.cwd()

const app = express()

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

devBundle.compile(app)

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

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/Skeletal-MERN'
MongoClient.connect(url, (err, db) => {
    console.log("Connected successfully to mongodb server")
    db.close()
})
