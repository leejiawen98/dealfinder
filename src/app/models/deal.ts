import { Business } from "./business";
import { Category } from "./category";
import { Customer } from "./customer";
import { Review } from "./review";
import { SaleTransaction } from "./sale-transaction";
import { Tag } from "./tag";

export class Deal {

    dealId: number | undefined;
    serialNum: string | undefined;
    dealName: string | undefined;
    description: string | undefined;
    startDateTime: Date | undefined;
    endDateTime: Date | undefined;
    quantityLeft: number | undefined;
    unitPrice: number | undefined; //Don't know what data type to put

    salesTransactions: SaleTransaction[] | undefined
    tags: Tag[] | undefined;
    category: Category | undefined;
    favCustomers: Customer[] | undefined;
    customers: Customer[] | undefined;
    business: Business | undefined;
    reviews: Review[] | undefined;

    constructor(dealId?: number, serialNum?: string, dealName?: string, description?: string, startDateTime?: Date, endDateTime?: Date, quantityLeft?: number, unitPrice?: number) {

        this.dealId = dealId;
        this.serialNum = serialNum;
        this.dealName = dealName;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.quantityLeft = quantityLeft;
        this.unitPrice = unitPrice;

    }

}
