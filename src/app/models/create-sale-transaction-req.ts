import { SaleTransaction } from "./sale-transaction";

export class CreateSaleTransactionReq {

    customerId: number | undefined;
    saleTransaction: SaleTransaction | undefined;
    dealId: number | undefined;

    constructor(customerId?: number, saleTransaction?: SaleTransaction, dealId?: number) {
        
        this.customerId = customerId;
        this.saleTransaction = saleTransaction;
        this.dealId = dealId;
    }

}
