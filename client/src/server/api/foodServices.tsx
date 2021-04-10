import baseAxios from '../baseAxios'
import { IData } from '../../interface/tableData/tabledata'

/**
 * list of all data
 * 
 * @returns
 */
export const foodList = () => {
  return baseAxios().get('/food/list')
}

/**
 * find One Doc
 * @param docID 
 * @returns
 */
export const findOne = (docID: any) => {
  return baseAxios().get(`/food/list/${docID}`)
}

/**
 * add data to the list
 * 
 * @param data
 * @returns
 */
export const addFood = (data: IData) => {
  return baseAxios().post('/food/add',data)
}

/**
 * update data to the list
 * 
 * @param docID 
 * @param data 
 * @returns
 */
export const updateFood = (docID: any, data: IData) => {
  return baseAxios().put(`/food/update/${docID}`, data)
}

/**
 * delete data to the list
 * 
 * @param docID
 * @returns
 */
export const deleteFood = (docID: any) => {
  return baseAxios().delete(`/food/delete/${docID}`)
}