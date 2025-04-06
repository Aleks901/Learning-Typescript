
/*
Enum for user types. Thought being that if you're unregistered
you'll appear as a guest in the system. If you are registered you
default to being a user. As for the admin usertype, you'd have to
create the user object for that manually or use the setter method.
*/
export enum UserType
{
    Admin,
    User,
    Guest,
};