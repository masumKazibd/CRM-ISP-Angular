import { Area } from "./area";
import { Billing } from "./billing";
import { City } from "./city";
import { Complain } from "./complain";
import { Feedback } from "./feedback";
import { IspPackage } from "./ispPackage";
import { Roles } from "./roles";

export class User{
    userId?:         number;
    userName?:       string;
    userEmail?:      string;
    userPassword?:   string;
    userPhone?:      string;
    userGender?:     string;
    userImage?:      string;
    userAddress?:    string;
    userCreateDate?: Date;
    cityId?:         number;
    areaId?:         number;
    packageId?:      number;
    roleId?:         number;
    area?:           Area;
    billings?:       Billing[];
    city?:           City;
    feedBacks?:      Feedback[];
    package?:        IspPackage;
    role?:           Roles;
    userComplains?:  Complain[];
}