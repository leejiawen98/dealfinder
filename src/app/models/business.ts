import { BankAccount } from "./bank-account";
import { Deal } from "./deal";
import { User } from "./User";

export class Business extends User{

    name: string | undefined;
    address: string | undefined;
    
    bankAccount: BankAccount | undefined;
    deals: Deal[] | undefined;

    constructor(id?: number, name?: string, username?: string, password?: string, email?: string, mobileNum?: string, address?: string)
    {
        super(id, username, password, email, mobileNum);
        this.name = name;
        this.address = address;

    }
}
