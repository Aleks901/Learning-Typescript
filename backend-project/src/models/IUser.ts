import { UserType } from "./UserTypes";

export interface IUser
{
    userId: string;
    userName: string;
    emailAddress: string;
    userType: UserType;

    getUserInfo(): string;
};