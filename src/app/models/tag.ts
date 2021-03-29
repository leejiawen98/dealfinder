import { Deal } from "./deal";

export class Tag {

    tagId: number | undefined;
    name: string | undefined;

    deals: Deal[] | undefined;

    constructor(tagId?: number, name?: string) {
        this.tagId = tagId;
        this.name = name;
    }
}
