import 'colors'
import dotenv from 'dotenv'
import express from 'express'
import { publicationRouter } from './src/publication/publication.controller'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

const main = async () => {
	app.use(express.json())
	app.use('/api', publicationRouter)
	app.all('*', (request, response) => {
		response.status(404).json({ message: 'Not found' })
	})

	app.listen(PORT, () =>
		console.log(
			`### Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT} ###`
				.bgRed
		)
	)
}

main()
