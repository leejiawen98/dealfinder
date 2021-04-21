import { Business } from "./business";
import { Category } from "./category";
import { Customer } from "./customer";
import { Favourite } from "./favourite";
import { Redemption } from "./redemption";
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
    enabled: boolean | undefined;

    salesTransactions: SaleTransaction[] | undefined
    tags: Tag[] | undefined;
    category: Category | undefined;
    favourites : Favourite[] | undefined;
    customers: Customer[] | undefined;
    business: Business | undefined;
    reviews: Review[] | undefined;
    redemptions: Redemption[] | undefined;

    constructor(dealId?: number, serialNum?: string, dealName?: string, description?: string, startDateTime?: Date, endDateTime?: Date, enabled ?: boolean, quantityLeft?: number, unitPrice?: number) {

        this.dealId = dealId;
        this.serialNum = serialNum;
        this.dealName = dealName;
        this.startDateTime = startDateTime;
        this.endDateTime = endDateTime;
        this.quantityLeft = quantityLeft;
        this.unitPrice = unitPrice;

    }

}
