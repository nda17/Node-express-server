import { publicationRouter } from '@/publication/publication.controller'
import logger from '@/utils/log'
import { PrismaClient } from '@prisma/client'
import 'colors'
import compression from 'compression'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'

dotenv.config()
const app = express()
const prisma = new PrismaClient()

const main = async () => {
	app.use(logger)
	app.use(cors())
	app.use(helmet())
	app.use(compression())
	app.use(express.json())
	app.use('/api/publication', publicationRouter)
	app.all('*', (request, response) => {
		response.status(404).json({ message: 'Not found' })
	})

	const PORT = process.env.PORT || 5000

	app.listen(PORT, () =>
		console.log(
			`### Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT} ###`
				.bgRed
		)
	)
}

main()
	.then(async () => {
		await prisma.$connect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
