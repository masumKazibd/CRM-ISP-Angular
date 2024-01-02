import { Complain } from "./complain";

export class Feedback{
    feedBackId?:    number;
    rating?:        string;
    ratingMessage?: string;
    userId?:        number;
    complainId?:    number;
    feedbackDate?:  Date;
    complain?:      Complain;
    user?:          string;
}