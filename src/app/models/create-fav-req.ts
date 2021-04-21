import { Favourite } from "./favourite";

export class CreateFavReq {

    customerId: number | undefined;
    dealId: number | undefined;

    favourite: Favourite | undefined;
    
    constructor(customerId?: number, dealId?: number, favourite?: Favourite) {
        this.customerId = customerId;
        this.dealId = dealId;
        this.favourite = favourite;
    }

}
