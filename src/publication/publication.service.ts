import { IPublication } from './publication.types'

const prisma = new PrismaClient()

export class PublicationService {
	createPublication({ publication }: IPublication): Publication {
		//Saving a publication to a database
		return publication
	}
}
