import { ISet } from '../../interfaces/FoodModel'

declare module 'express' {
  export interface Request {
    body: ISet
  }
}