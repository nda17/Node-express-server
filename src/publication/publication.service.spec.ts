import { PublicationService } from './publication.service'

describe('CREATE /api/publication', () => {
	const publicationService = new PublicationService()

	it('should create a publication', async () => {
		const testPublication = await publicationService.create({
			title: 'testTitle',
			description: 'testDescription'
		})
		expect(testPublication).toHaveProperty('id')
		expect(testPublication.title).toEqual('testTitle')
		expect(testPublication.description).toEqual('testDescription')
	})
})
