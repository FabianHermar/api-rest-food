import express from 'express'
import morgan from 'morgan'

import FoodRoute from './routes/FoodRoute.js'

const app = express()
const port = 3000

app.use( express.urlencoded( { extended: false } ) )
app.use( express.json() )
app.use( morgan( 'dev' ) )

app.use( '/api', FoodRoute )

app.get( ( req, res ) => {
  res.status( 404 ).json( { message: 'Not found' } )
})

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`)
})
