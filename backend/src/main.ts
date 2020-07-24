import 'dotenv/config'
import './config/database'
import 'reflect-metadata'

import app from './app'

const port = process.env.PORT || 3030

app.listen(port,
  () => console.log(`🔥 Up and runun' on http://localhost:${port}`)
)
