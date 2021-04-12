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
  if (snapShot.empty) {
    return
  }
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
  const getData = await collection.doc(docID).get()
  if (!getData.exists) {
    return
  }
  return getData.data()
}

/**
 * SearchData
 * @param props 
 * @param value
 * @returns 
 */
export const searchOneData = async (props: any, value: any) => {
  const collection = await db.collection(DB_COLLECTION)
  const datas = await collection.where(props, '==', value).get()
  return datas.docs.map(doc => doc.data())
}

export const orderData = async (props: any, desc: any) => {
  const collection = await db.collection(DB_COLLECTION)
  const datas = await collection.orderBy(props, desc).get()
  return datas.docs.map(doc => doc.data())
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