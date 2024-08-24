import { PublicationService } from './publication.service'

describe('PublicationService', () => {
	const publicationService = new PublicationService()

	it('should create a publication', async () => {
		const testPublication = await publicationService.create({
			title: 'Test title',
			description: 'Test string'
		})
		expect(testPublication).toHaveProperty('id')
		expect(testPublication.title).toEqual('Test title')
	})
})
