import StatusCodes from 'http-status-codes'
import { Request, Response } from 'express'
import { paramMissingError } from '@shared/constants'
const { BAD_REQUEST, CREATED, OK } = StatusCodes
import {
  getAllData,
  setData,
  getOneData,
  updateData,
  deleteData,
  searchOneData,
  orderData
} from '../firestore/methods'

/**
 * Get List of items
 * 
 * @param req
 * @param res
 * @returns
 */
export const getAll = async (req: Request, res: Response) => {
  const data = await getAllData()
  // console.log(data)
  return res.status(OK).json(data)
}

/**
 * Add Item in list
 * 
 * @param req
 * @param res
 * @returns
 */
export const addItem = async (req: Request, res: Response) => {
  if (req.body.name === null) {
    return res.status(BAD_REQUEST).json({
      message: paramMissingError
    })
  }
  await setData(req.body.name, req.body)
  return res.status(CREATED).json({
    message: "Item Added Successfully"
  })
}

/**
 * Get one item in list
 * 
 * @param req 
 * @param res
 * @returns
 */
export const getOne = async (req: Request, res: Response) => {
  const data = await getOneData(req.params.id)
  return res.status(OK).json(data)
}

/**
 * search one data
 * @param req 
 * @param res 
 */
export const searchOne = async (req: Request, res: Response) => {
  const data = await searchOneData(req.params.prop, req.query.q)
  return res.status(OK).json(data)
}

/**
 * order data
 * @param req 
 * @param res 
 */
export const orderByData = async (req: Request, res: Response) => {
  const data = await orderData(req.query.orderBy, req.query.format)
  return res.status(OK).json(data)
}

/**
 * Update Item details
 * 
 * @param req
 * @param res
 * @returns
 */
export const updateItem = async (req: Request, res: Response) => {
  if (req.params.id === null) {
    return res.status(BAD_REQUEST).json({
      message: paramMissingError
    })
  }
  await updateData(req.params.id, req.body)
  return res.status(OK).json({
    message: "Item Updated Successfully"
  })
}

/**
 * Delete Item
 * 
 * @param req
 * @param res
 * @returns
 */
export const deleteOneItem = async (req: Request, res: Response) => {
  if (req.params.id === null) {
    return res.status(BAD_REQUEST).json({
      message: paramMissingError
    })
  }
  await deleteData(req.params.id)
  return res.status(OK).json({
    message: "Item Deleted Successfully"
  })
}