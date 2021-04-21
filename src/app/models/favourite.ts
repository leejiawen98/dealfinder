import { Customer } from "./customer";
import { Deal } from "./deal";

export class Favourite {

    favouriteId: number | undefined;
    favDateTime: Date | undefined;

    customer: Customer | undefined;
    deal:   Deal | undefined;

    constructor(favouriteId?: number, favDateTime?: Date) {
        this.favouriteId = favouriteId;
        this.favDateTime = favDateTime;
    }
}
