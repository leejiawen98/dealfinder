import { Customer } from "./customer";

export class CreditCard {

    ccId: number | undefined;
    ccNum: string | undefined;
    cvv: string | undefined;
    ccName: string | undefined;
    expDate: Date | undefined;

    customer: Customer | undefined;

    cosntructor(ccId?: number, ccNum?: string, cvv?: string, ccName?: string, expDate?: Date) {
        this.ccId = ccId;
        this.ccNum = ccNum;
        this.cvv = cvv;
        this.ccName = ccName;
        this.expDate = expDate;
    }

}
