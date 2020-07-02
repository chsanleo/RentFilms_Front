import { IOrder } from '../models/iorder.model';

export interface IOrderShow extends IOrder{
    movieTitle:string,
    createdDate:Date,
}
