import { User } from './user.model';

export interface UserLogin {
    user: User
    token: string
}