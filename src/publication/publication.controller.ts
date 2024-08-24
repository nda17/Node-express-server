import { createPublicationDto } from '@/publication/publication.dto'
import { PublicationService } from '@/publication/publication.service'
import { Router } from 'express'

const router = Router()
const publicationService = new PublicationService()

router.get('/', async (request, response) => {
	const data = await publicationService.getAll()
	response.json(data)
})

router.post('/', async (request, response) => {
	const validation = createPublicationDto.safeParse(request.body)

	if (!validation.success) {
		return response.status(400).json({ message: validation.error.errors })
	}

	const publication = await publicationService.create(request.body)

	response.status(200).json(publication)
})

export const publicationRouter = router
