import Z from 'zod';

export const TransactionSchema = Z.object({
    _id: Z.string(),
    accountSender: Z.string().trim().min(1),
    accountReceiver: Z.string().trim().min(1),
    balance: Z.number().optional().default(0),
    CreatedAt: Z.date().optional().default(new Date()),
});

export type ITransaction = Z.infer<typeof TransactionSchema>;