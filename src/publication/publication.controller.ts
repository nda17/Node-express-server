import { Router } from 'express'
import { PublicationService } from './publication.service'

const router = Router()

const publicationService = new PublicationService()

router.post('/publication', (request, response) => {
	if (!request.body?.text?.length) {
		return response.status(400).json({ message: 'Message is required' })
	}
	const publication = publicationService.createPublication(request.body)
	response.status(200).json(publication)
})

export const publicationRouter = router
