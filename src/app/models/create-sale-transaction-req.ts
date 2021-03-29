import { SaleTransaction } from "./sale-transaction";

export class CreateSaleTransactionReq {

    customerId: number | undefined;
    saleTransaction: SaleTransaction | undefined;
    

    constructor(customerId?: number, saleTransaction?: SaleTransaction) {
        
        this.customerId = customerId;
        this.saleTransaction = saleTransaction;
    }

}
