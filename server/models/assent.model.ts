import db from '../database/index'
import bcrypt from 'bcrypt'
import config from '../config'
import Assent from '../types/assent.types'

const hashPassword = (password: string) => {
	const salt = parseInt(config.salt as unknown as string, 10)
	return bcrypt.hashSync(`${password}${config.pepper}`, salt)
}

class AssentModel {
	//create assent
	async create(u: Assent): Promise<Assent> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO assent ( name, phone, password, access ) values ($1, $2, $3, $4) returning *'
			//run query
			const result = await connect.query(sql, [
				u.name,
				u.phone,
				hashPassword(u.password),
				u.access,
			])
			//release connect
			connect.release()
			//return created assent
			return result.rows[0]
		} catch (err: any) {
			// throw new Error(`email already exists! `)
			throw new Error(`${err} `)
		}
	}
	//get all assent
	async getAll(): Promise<Assent[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from assent'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return created assent
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific assent
	async getOne(id: string): Promise<Assent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from assent WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created assent
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find assent ${id}, ${err}`)
		}
	}
	async getOneFromName(name: string): Promise<Assent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from assent WHERE name=($1)'
			//run query
			const result = await connect.query(sql, [name])
			//release connect
			connect.release()
			//return created assent
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find assent ${name}, ${err}`)
		}
	}
	//update assent

	async update(u: Assent): Promise<Assent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE assent SET name=$1, email=$2, phone=$3, access=$4  WHERE id=$5 RETURNING *`
			//run query
			const result = await connect.query(sql, [
				u.name,
				u.email,
				u.phone,
				u.access,
				u.id,
			])
			//release connect
			connect.release()
			//return created assent
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  assent ${u.email}, ${err}`)
		}
	}

	async updatePass(u: Assent): Promise<Assent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE assent SET  password=$1  WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [hashPassword(u.password), u.id])
			//release connect
			connect.release()
			//return created assent
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  assent , ${err}`)
		}
	}

	async updateAccess(u: Assent): Promise<Assent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE assent SET  access=$1  WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [u.access, u.id])
			//release connect
			connect.release()
			//return created assent
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  assent , ${err}`)
		}
	}

	//delete assent
	async delete(id: string): Promise<Assent> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from assent  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created assent
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  assent ${id}, ${err}`)
		}
	}
	//authenticate assent
	async auth(email: string, password: string): Promise<Assent | null> {
		try {
			const connect = await db.connect()
			const sql = `SELECT password FROM assent WHERE email=$1`
			const res = await connect.query(sql, [email])
			if (res.rows.length) {
				const {password: hashPassword} = res.rows[0]
				const isPassValid = bcrypt.compareSync(
					`${password}${config.pepper}`,
					hashPassword
				)
				if (isPassValid) {
					const studentInfo = await connect.query(
						`SELECT * FROM assent WHERE email=($1)`,
						[email]
					)
					return studentInfo.rows[0]
				}
			}
			connect.release()
			return null
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
}
export default AssentModel
