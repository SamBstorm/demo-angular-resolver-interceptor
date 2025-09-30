import { ILogin } from "./ilogin";

export interface IUser extends ILogin{
    lastname : string;
    firstname : string;
    createdAt : Date;
    disabledAt? : Date;
}
