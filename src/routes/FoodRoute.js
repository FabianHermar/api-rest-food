import { Router } from 'express'

const router = Router()

router.get( '/comida', ( req, res ) => {
  return res.json( { message: 'Comida route' } )
} )

export default router
