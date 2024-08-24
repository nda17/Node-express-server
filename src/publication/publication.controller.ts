import { PublicationService } from '@/publication/publication.service'
import { Router } from 'express'

const router = Router()

const publicationService = new PublicationService()

router.post('/publication', async (request, response) => {
	if (!request.body?.title?.length) {
		return response.status(400).json({ message: 'Title is required' })
	}

	if (!request.body?.description?.length) {
		return response
			.status(400)
			.json({ message: 'Description is required' })
	}

	const publication = await publicationService.createPublication(
		request.body
	)

	response.status(200).json(publication)
})

export const publicationRouter = router
