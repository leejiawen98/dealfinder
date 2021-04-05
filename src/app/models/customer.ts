import { CreditCard } from "./credit-card";
import { Deal } from "./deal";
import { User } from "./User";

export class Customer extends User
{
    firstName: string | undefined;
    lastName: string | undefined;
    eWalletAmount: number | undefined; //Not sure what to define.

    favDeals : Deal[] | undefined;
    deals : Deal[] | undefined;
    creditCard: CreditCard | undefined;

    constructor(id?: number, username?: string, password?: string, email?: string, mobileNum?: string, firstName?: string, lastName?: string)
	{
        super(id, username, password, email, mobileNum);
        this.firstName = firstName;
        this.lastName = lastName;
        this.eWalletAmount = 0;
	}


}