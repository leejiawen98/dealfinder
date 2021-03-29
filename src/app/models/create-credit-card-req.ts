import { CreditCard } from "./credit-card";

export class CreateCreditCardReq {

    customerId: number | undefined;
    creditCard: CreditCard | undefined;

    constructor(customerId?: number, creditCard?: CreditCard) 
    {
        this.customerId = customerId;
        this.creditCard = creditCard;
    }

}
