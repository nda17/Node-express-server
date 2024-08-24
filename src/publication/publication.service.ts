import { IPublication } from '@/publication/publication.types'
import { PrismaClient, Publication } from '@prisma/client'

export class PublicationService {
	private prisma = new PrismaClient()

	async getAll(): Promise<IPublication[]> {
		try {
			return this.prisma.publication.findMany()
		} catch (error) {
			console.error(error)
			throw new Error('Error when requesting all publications')
		}
	}

	create(publication: IPublication): Promise<Publication> {
		try {
			return this.prisma.publication.create({
				data: publication
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error while creating publication')
		}
	}
}
