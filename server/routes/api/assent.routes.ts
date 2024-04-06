import {Router, Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import config from '../../config'
import AssentModel from '../../models/assent.model'
const assentModel = new AssentModel()

const routes = Router()

routes.post('/', async (req: Request, res: Response, next) => {
	try {
		const user = await assentModel.create(req.body)
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
		const user = await assentModel.getAll()
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
		const user = await assentModel.getOne(req.params.id as unknown as string)
		res.json({
			status: 'success',
			data: user,
			message: 'user retrieved successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.get('/name/:name', async (req: Request, res: Response, next) => {
	try {
		const user = await assentModel.getOneFromName(
			req.params.name as unknown as string
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
		const user = await assentModel.update(req.body)
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
		const user = await assentModel.updatePass(req.body)
		res.json({
			status: 'success',
			data: user,
			message: 'user updated successfully',
		})
	} catch (err) {
		next(err)
	}
})
routes.patch('/acc/:id', async (req: Request, res: Response, next) => {
	try {
		const user = await assentModel.updateAccess(req.body)
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
		const user = await assentModel.delete(req.params.id as unknown as string)
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
		const user = await assentModel.auth(email, password)
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
