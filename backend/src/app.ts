import express from 'express'
import { json, urlencoded } from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'

import authRouter from './routes/auth'
import postsRouter from './routes/post'

const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))
app.use(compression())
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/posts', postsRouter)

export default app
