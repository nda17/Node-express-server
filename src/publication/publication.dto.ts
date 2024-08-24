import { z } from 'zod'

export const createPublicationDto = z.object({
	title: z.string().min(1, 'Title is required!').max(14),
	description: z.string().min(5, 'Description is required!').max(30)
})
