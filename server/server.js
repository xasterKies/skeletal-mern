import devBundle from './devBundle'
import express from 'express'
import path from 'path'

const CURRENT_WORKING_DIR = process.cwd()

devBundle.compile(app)

const app = express()

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))