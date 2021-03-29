import { SaleTransaction } from "./sale-transaction";

export class User
{
    id: number | undefined;
    username: string | undefined;
    password: string | undefined;
    email: string | undefined;
    mobileNum: string | undefined;

    salesTransaction: SaleTransaction[] | undefined

    constructor(id?: number, username?: string, password?: string, email?: string, mobileNum?: string)
	{
		this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobileNum = mobileNum;
	}
}
