import { IspPackage } from "./ispPackage";

export class Billing{
    billingId?:     number;
    billingStatus?: boolean;
    userId?:        number;
    packageId?:     number;
    billingDate?:   Date;
    package?:       IspPackage;
    user?:          string;
}