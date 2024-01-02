import { SupportEngineer } from "./supportEngineer";

export class Area {
    areaId?:           number;
    areaName?:         string;
    postCode?:         number;
    supportEngineers?: SupportEngineer;
    users?:            string[];
}
