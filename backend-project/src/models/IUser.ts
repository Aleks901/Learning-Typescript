import { UserType } from "./UserTypes";

export interface IUser
{
    userId: string;
    userName: string;
    emailAddress: string;
    userType: UserType;

    /**
     * @returns string - All user related information.
     */
    getUserInfo(): string;
};