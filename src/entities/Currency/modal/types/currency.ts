export enum Currencies {
    RUB = 'RUB',
    EUR = 'EUR',
    USD = 'USD'
}

export interface Currency {
    full_name: string;
    id: number;
    is_crypto: boolean;
    name: string;
}
