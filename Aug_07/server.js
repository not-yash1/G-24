
import app from './app.js'
import dotenv from 'dotenv'

dotenv.config({ path: './config/config.env' })

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
})