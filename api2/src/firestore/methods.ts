import {DB_COLLECTION} from '@shared/constants'
import db from './firestore'
import { ISet } from '../interfaces/FoodModel'

/**
 * GetAllData
 * @returns
 */
export const getAllData = async () => {
  const collection = await db.collection(DB_COLLECTION)
  const snapShot = await collection.get()
  return snapShot.docs.map(doc => doc.data())
}

/**
 * SetData
 * @returns
 */
export const setData = async (docID: any,data: ISet) => {
  await db.collection(DB_COLLECTION)
          .doc(docID).set(data)
}
