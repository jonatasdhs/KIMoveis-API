import { z } from 'zod'


export const userSchema = z.object({
    name: z.string().max(45),
    email: z.string().email(),
    password: z.string().min(4),
    admin: z.boolean().default(false)
})

export const userReturnSchema = userSchema.extend({
    id: z.number(),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
}).omit({password: true})

export const userUpdateSchema = userSchema.omit({password: true, admin: true}).partial()
export const userReturnMultipleSchema = userReturnSchema.array()
