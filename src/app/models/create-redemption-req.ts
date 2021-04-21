import { Redemption } from "./redemption";

export class CreateRedemptionReq {

    customerId: number | undefined;
    dealId: number | undefined;
    redemption: Redemption | undefined;

    constructor(customerId?: number, redemption?: Redemption, dealId?: number) {
        this.customerId = customerId;
        this.dealId = dealId;
        this.redemption = redemption;
    }

}
