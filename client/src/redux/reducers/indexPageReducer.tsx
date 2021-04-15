import React from 'react'
import { IData } from '../../interface/tableData/tabledata'
import { foodList } from '../../server/api/foodServices'

const indexReducer = () => {
  const response = foodList().then(res => res.data).catch(err => console.log(err))
  return response
}

export default indexReducer