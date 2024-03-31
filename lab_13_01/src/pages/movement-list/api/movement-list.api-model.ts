export interface AccountApi {
    id: string;
    iban: string;
    name: string;
    balance: number;
}

export interface MovementApi {
    id: string;
    description: string;
    amount: number;
    balance: number;
    transaction: string;
    realTransaction: string;
    accountId: string;
}