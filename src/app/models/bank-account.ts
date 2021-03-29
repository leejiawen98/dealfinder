import { Business } from "./business";

export class BankAccount {

    accId: number | undefined;
    accNum: string | undefined;
    bank: string | undefined;

    business: Business | undefined;

    constructor(accId?: number, accNum?: string, bank?: string)
    {
        this.accId = accId;
        this.accNum = accNum;
        this.bank = bank;
    }

}
