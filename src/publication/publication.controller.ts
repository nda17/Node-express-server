import { publicationDto } from '@/publication/publication.dto'
import { PublicationService } from '@/publication/publication.service'
import { Router } from 'express'

const router = Router()
const publicationService = new PublicationService()

router.get('/', async (request, response) => {
	const data = await publicationService.getAll()

	response.json(data)
})

router.get('/:id', async (request, response) => {
	const data = await publicationService.getById(request.body)

	response.json(data)
})

router.post('/', async (request, response) => {
	const validation = publicationDto.safeParse(request.body)

	if (!validation.success) {
		return response.status(400).json({ message: validation.error.errors })
	}

	const publication = await publicationService.create(request.body)

	response.status(200).json(publication)
})

router.put('/:id', async (request, response) => {
	const validation = publicationDto.safeParse(request.body)

	if (!validation.success) {
		return response.status(400).json({ message: validation.error.errors })
	}

	await publicationService.update(request.body)

	response.status(200).json({ message: 'Success' })
})

router.delete('/:id', async (request, response) => {
	await publicationService.delete(request.body)

	response.status(200).json({ message: 'Success' })
})

export const publicationRouter = router
