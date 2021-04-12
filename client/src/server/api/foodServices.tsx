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
 * search One
 * @param prop 
 * @returns
 */
export const searchOne = (prop: any, value: any) => {
  return baseAxios().get(`/search/${prop}?q=${value}`)
}

/**
 * Order by data
 * @param prop 
 * @param order
 * @returns 
 */
export const orderByAll = (prop: any, order: any) => {
  return baseAxios().get(`/food/list?orderBy=${prop}&format=${order}`)
}

/**
 * add data to the list
 * 
 * @param data
 * @returns
 */
export const addFood = (data: IData) => {
  return baseAxios().post('/food/add', data)
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