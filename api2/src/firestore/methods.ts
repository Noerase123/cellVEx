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
 * 
 * @param docID
 * @param data
 * @returns
 */
export const setData = async (docID: any,data: ISet) => {
  await db.collection(DB_COLLECTION)
          .doc(docID).set(data)
}

/**
 * GetOneDoc
 * @param docID
 * @returns
 */
export const getOneData = async (docID: any) => {
  const collection = await db.collection(DB_COLLECTION)
  return await collection.doc(docID).get()
}

/**
 * Update Data
 * @param docID
 * @param data
 * @returns
 */
export const updateData = async (docID: any, data: ISet) => {
  const collection = await db.collection(DB_COLLECTION)
  return await collection.doc(docID).update(data)
}

/**
 * Delete Data
 * @param docID
 * @returns
 */
export const deleteData = async (docID: any) => {
  const collection = await db.collection(DB_COLLECTION)
  return await collection.doc(docID).delete()
}