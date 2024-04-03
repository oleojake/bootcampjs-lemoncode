export interface AccountAPI {
    id: string;
    iban: string;
    type: string;
    name: string;
    balance: number;
    lastTransaction: string;
}

export interface NewAccountAPI {
    type: string;
    name: string;
}