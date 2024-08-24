import { IPublication } from '@/publication/publication.types'
import { PrismaClient, Publication } from '@prisma/client'

export class PublicationService {
	private prisma = new PrismaClient()

	createPublication(publication: IPublication): Promise<Publication> {
		return this.prisma.publication.create({
			data: publication
		})
	}
}
