import { IUser } from './IUser'
import { UserType } from './UserTypes';
import { randomUUID } from 'crypto';

export class User implements IUser
{
    userId: string;
    userName: string;
    emailAddress: string;
    userType: UserType;

    /**
     * User class constructor.
     * 
     * @param userName - Name of the user.
     * @param emailAddress - User's email address.
     * @param userType - The type of user (Guest, User, Admin)
     */
    constructor(userName: string, emailAddress: string, userType: UserType = UserType.User)
    {
        this.userId = randomUUID();
        this.userName = userName;
        this.emailAddress = emailAddress;
        this.userType = userType;
    }

    /**
     * User id getter method
     * @returns string - userId of the user object.
     */
    private getUserId(): string 
    {
        return `${this.userId}`;
    }

    /**
     * Username getter method
     * @returns string - userName of the user object.
     */
    public getUserName(): string 
    {
        return `${this.userName}`;
    }

    /**
     * Username setter method.
     * @param newUserName string - New username to be set for the user object.
     */
    private setUserName(newUserName: string): void 
    {
        this.userName = newUserName;
    }

    /**
     * Email Address getter method.
     * @returns string - Email Address of the user object.
     */
    private getEmailAddress(): string
    {
        return `${this.emailAddress}`;
    }

    /**
     * Email Address setter method.
     * @param newEmailAddress string - newEmailAddress to be set for the user object.
     */
    private setEmailAddress(newEmailAddress: string): void 
    {
        this.emailAddress = newEmailAddress;
    }

    /**
     * userType getter method.
     * @returns string - The userType of the user object.
     */
    private getUserType(): string
    {
        return `${this.userType}`;
    }

    /**
     * userType setter method.
     * @param newUserType UserType - Sets the new UserType to the user object
     */
    private setUserType(newUserType: UserType): void 
    {
        this.userType = newUserType;
    }

    /**
     * Getter method for all user related information.
     * @returns string - All user related information
     */
    getUserInfo(): string 
    {
        return `${this.userId} ${this.userName} ${this.emailAddress} ${this.userType}`;
    }

};