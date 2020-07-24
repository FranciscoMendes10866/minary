import express from 'express'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'

import authRouter from './routes/auth.router'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())
app.use(compression())
app.use('/api/v1/auth', authRouter)

export default app
