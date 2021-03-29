import { Deal } from "./deal";
import { User } from "./User";

export class SaleTransaction {

    saleTransactionId: number | undefined;
    price: number | undefined; //Data type BigInteger
    totalAmount: number | undefined; //Big Int
    transactionDateTime: Date | undefined;
    quantity: number | undefined;

    user: User | undefined;
    deal: Deal | undefined;

    constructor(saleTransactionId?: number, price?: number, totalAmount?: number, transactionDateTime?: Date, quantity?: number) {
        this.saleTransactionId = saleTransactionId;
        this.price = price;
        this.totalAmount = totalAmount;
        this.transactionDateTime = transactionDateTime;
        this.quantity = quantity;
    }

}
