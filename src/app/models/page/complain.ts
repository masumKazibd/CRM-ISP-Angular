import { ComplainStatus } from "./complainStatus";

export class Complain {
    complainId?:       number;
    complainType?:     string;
    complainDetails?:  string;
    complaintDate?:    Date;
    complainStatuses?: ComplainStatus[];
    feedBacks?:        string[];
    userComplains?:    string[];
}