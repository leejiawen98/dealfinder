import { Category } from "./category";
import { Deal } from "./deal";

export class LeafCategoryAndDeals {

    leafCategory: Category;
    dealsAvail: Deal[];
    existDeal: boolean;

    constructor(leafCategory?: Category) {
        this.leafCategory = leafCategory;
        this.dealsAvail = new Array();
        this.existDeal = false;
    }

}