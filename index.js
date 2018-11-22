const express = require('express')
const users = require('./users.json')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = 3007

const JWT = require('jsonwebtoken')
const SECRET = 'shhhh'

app.use(express.json())
app.use(cookieParser())
app.use(cors({
	origin: 'http://localhost:3007',
	credentials: true
}))

app.post('/auth/login', (req, res) => {
	const email = req.body.email
	const password = req.body.password
//	res.status(200).json({email, password})

	if (email == "") {
		res.status(400)
		throw new Error('account email is empty');
	}

	const payload = {
		email: email
	}
	const token = JWT.sign(payload, SECRET)

	//res.cookie('access_token', {token: "123"})
	res.cookie('access_token', token, {
		maxAge: 3600,
		httpOnly: true,
		// secure: true
	})

	res.status(200).end()
})

app.use('/api/users', (req, res) => {
	const token = req.cookies.access_token

	try {
		const decoded = JWT.verify(token, SECRET)
	} catch (err) {
		res.status(401)
		throw err
	}
	
	res.status(200).json(users)
})

app.use((err, req, res, next) => {
	res.json(err)
})

app.listen(PORT, () => {
	console.info(`listening on port ${PORT}`)
})
