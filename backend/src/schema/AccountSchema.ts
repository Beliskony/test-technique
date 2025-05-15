import Z from 'zod';

const AccountSchema = Z.object({
    _id: Z.string(),
    accountNumber: Z.string().trim().min(1),
    balance: Z.number().optional().default(0),
    UserOwner: Z.string().trim().min(1),
})

export type IAccount = Z.infer<typeof AccountSchema>;