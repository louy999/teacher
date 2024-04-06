import {Router} from 'express'
import studentRoutes from './api/student.routes'
import accessRoutes from './api/assent.routes'

const routes = Router()
routes.use('/student', studentRoutes)
routes.use('/access', accessRoutes)

export default routes
