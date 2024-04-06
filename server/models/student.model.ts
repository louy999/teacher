import db from '../database/index'
import Student from '../types/student.types'
import bcrypt from 'bcrypt'
import config from '../config'

const hashPassword = (password: string) => {
	const salt = parseInt(config.salt as unknown as string, 10)
	return bcrypt.hashSync(`${password}${config.pepper}`, salt)
}

class StudentModel {
	//create student
	async create(u: Student): Promise<Student> {
		try {
			//open connect with DB1
			const connect = await db.connect()
			const sql =
				'INSERT INTO student ( name, email, phone, password, birthday, stage ) values ($1, $2, $3, $4, $5, $6) returning *'
			//run query
			const result = await connect.query(sql, [
				u.name,
				u.email,
				u.phone,
				hashPassword(u.password),
				u.stage,
				u.birthday,
			])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err: any) {
			// throw new Error(`email already exists! `)
			throw new Error(`${err} `)
		}
	}
	//get all student
	async getAll(): Promise<Student[]> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from student'
			//run query
			const result = await connect.query(sql)
			//release connect
			connect.release()
			//return created student
			return result.rows
		} catch (err) {
			throw new Error(`${err}`)
		}
	}
	//get specific student
	async getOne(id: string): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from student WHERE id=($1)'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find student ${id}, ${err}`)
		}
	}
	async getOneFromEmail(email: string): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'SELECT * from student WHERE email=($1)'
			//run query
			const result = await connect.query(sql, [email])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`.could not find student ${email}, ${err}`)
		}
	}
	//update student

	async update(u: Student): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE student SET name=$1, email=$2, phone=$3, birthday=$4, stage=$5  WHERE id=$6 RETURNING *`
			//run query
			const result = await connect.query(sql, [
				u.name,
				u.email,
				u.phone,
				u.birthday,
				u.stage,
				u.id,
			])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  student ${u.email}, ${err}`)
		}
	}

	async updatePass(u: Student): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = `UPDATE student SET  password=$1  WHERE id=$2 RETURNING *`
			//run query
			const result = await connect.query(sql, [hashPassword(u.password), u.id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not update  student , ${err}`)
		}
	}

	//delete student
	async delete(id: string): Promise<Student> {
		try {
			//open connect with DB
			const connect = await db.connect()
			const sql = 'DELETE from student  WHERE id=($1) RETURNING *'
			//run query
			const result = await connect.query(sql, [id])
			//release connect
			connect.release()
			//return created student
			return result.rows[0]
		} catch (err) {
			throw new Error(`could not delete  student ${id}, ${err}`)
		}
	}
	//authenticate student
	async auth(email: string, password: string): Promise<Student | null> {
		try {
			const connect = await db.connect()
			const sql = `SELECT password FROM student WHERE email=$1`
			const res = await connect.query(sql, [email])
			if (res.rows.length) {
				const {password: hashPassword} = res.rows[0]
				const isPassValid = bcrypt.compareSync(
					`${password}${config.pepper}`,
					hashPassword
				)
				if (isPassValid) {
					const studentInfo = await connect.query(
						`SELECT * FROM student WHERE email=($1)`,
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
export default StudentModel
