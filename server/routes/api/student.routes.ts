import {Router, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config'
import StudentModel from '../../models/student.model'
const studentModel = new StudentModel()

const routes = Router()

routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await studentModel.create(req.body)
		res.json({
			status: 'success',
			data: {...user},
			message: 'user created successfully',
		})
	} catch (err) {
		next(err)
	}
})
//create
routes.get('/', async (req: Request, res: Response, next) => {
	try {
		const user = await studentModel.getAll()
		res.json({
			status: 'success',
			data: user,
			message: 'users retrieved successfully',
		})
	} catch (err: any) {
		next(err.message)
	}
})
routes.get('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await studentModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/email/:email', async (req: Request, res: Response, next) => {
	try {
		const user = await studentModel.getOneFromEmail(
			req.params.email as unknown as string
		)
		res.json({
			status: 'success',
			data: user,
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.patch('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await studentModel.update(req.body)
		res.json({
			status: 'success',
			data: user,
			message: 'user updated successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.patch('/pass/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await studentModel.updatePass(req.body)
		res.json({
			status: 'success',
			data: user,
			message: 'user updated successfully',
		})
	} catch (err) {
		next(err)
	}
})

routes.delete('/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await studentModel.delete(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user deleted successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.post('/auth', async (req: Request, res: Response, next) => {
	try {
		const {email, password} = req.body
		const user = await studentModel.auth(email, password)
		const token = jwt.sign({user}, config.tokenSecret as unknown as string)
		if (!user) {
			return res.status(401).json({
				status: 'error',
				message: 'the username and password do not match please try agin',
			})
		}
		res.cookie('accessToken', token, {
			httpOnly: true,
		})

		res.json({
			status: 'success',
			data: {...user},
			message: 'user auth successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.post('/logout', async (req: Request, res: Response, next) => {
	res
		.clearCookie('accessToken', {
			secure: true,
			sameSite: 'none',
		})
		.status(200)
		.json('user has been logout')
})

export default routes
