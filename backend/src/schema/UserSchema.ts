import Z from 'zod';

export const UserSchema = Z.object({
    _id: Z.string(),
    name: Z.string().trim().min(1),
    email: Z.string().email().trim().min(1),
})
