import { IUser } from './iuser.model';

export interface IUserLogin {
    user: IUser
    token: string
}