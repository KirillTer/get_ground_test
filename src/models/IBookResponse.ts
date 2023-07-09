import { IBook } from './IBook'

export interface IBookResponse {
  books: IBook[];
  count: number;
}