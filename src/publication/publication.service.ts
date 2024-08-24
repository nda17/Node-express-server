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

	async getById(request: IPublication) {
		try {
			return this.prisma.publication.findUnique({
				where: {
					id: request.id
				},
				select: {
					id: true,
					title: true,
					description: true
				}
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error when requesting publication')
		}
	}

	async create(publication: IPublication): Promise<Publication> {
		try {
			return this.prisma.publication.create({
				data: publication
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error while creating publication')
		}
	}

	async update(request: IPublication) {
		try {
			return this.prisma.publication.update({
				where: {
					id: request.id
				},
				data: {
					title: request.title,
					description: request.description
				}
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error updating publication')
		}
	}

	async delete(request: IPublication) {
		try {
			return this.prisma.publication.delete({
				where: {
					id: request.id
				}
			})
		} catch (error) {
			console.error(error)
			throw new Error('Error when deleting publication')
		}
	}
}
