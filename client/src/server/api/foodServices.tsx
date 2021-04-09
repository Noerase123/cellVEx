import baseAxios from '../baseAxios'
import {IData} from '../../interface/tableData/tabledata'

export const foodList = () => {
  return baseAxios().get('/food/list')
}

export const addFood = (data: IData) => {
  return baseAxios().post('/food/add',data)
}

export const updateFood = (data: IData) => {

}

export const deleteFood = (data: IData) => {
  
}