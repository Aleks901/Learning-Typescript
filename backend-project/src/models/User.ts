import { IUser } from './IUser'
import { UserType } from './UserTypes';
import { randomUUID } from 'crypto';

export class User implements IUser
{
    userId: string;
    userName: string;
    emailAddress: string;
    userType: UserType;

    constructor(userName: string, emailAddress: string, userType: UserType = UserType.User)
    {
        this.userId = randomUUID();
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.userType = userType;
    }

    getUserId(): string 
    {
        return `${this.userId}`;
    }

    getUserName(): string 
    {
        return `${this.userName}`;
    }

    setUserName(newUserName: string): void 
    {
        this.userName = newUserName;
    }

    getEmailAddress(): string
    {
        return `${this.emailAddress}`;
    }

    setEmailAddress(newEmailAddress: string): void 
    {
        this.emailAddress = newEmailAddress;
    }

    getUserType(): string
    {
        return `${this.userType}`;
    }

    setUserType(newUserType: UserType): void 
    {
        this.userType = newUserType;
    }

    getUserInfo(): string 
    {
        return `${this.userId} ${this.userName} ${this.emailAddress} ${this.userType}`;
    }

};