import { Customer } from "./customer";

export class AddFavDealsReq {

    customerId: number | undefined;
    dealId: number | undefined;

    constructor(customerId?: number, dealId?: number) {
        this.customerId = customerId;
        this.dealId = dealId;
    }
}
