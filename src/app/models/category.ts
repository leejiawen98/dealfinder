import { Deal } from "./deal";

export class Category {

    categoryId: number | undefined;
    name: string | undefined;
    description: string | undefined;

    deals: Deal[] | undefined;
    subCategories: Category[] | undefined;
    parentCategory: Category | undefined;

    constructor(categoryId?: number, name?: string, description?: string) {
        this.categoryId = categoryId;
        this.name = name;
        this.description = description;
    }


}
