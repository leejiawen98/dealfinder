import { Customer } from "./customer";
import { Deal } from "./deal";

export class Redemption {

    redemptionId: number | undefined;
    redeemed: boolean | undefined;

    deal: Deal | undefined;
    customer: Customer | undefined;

    constructor(redemptionId?: number, redeemed?: boolean) {
        this.redemptionId = redemptionId;
        this.redeemed = false;
    }
    
}
