import StatusCodes from 'http-status-codes'
import { Request, Response } from 'express'
import {paramMissingError} from '@shared/constants'
const { BAD_REQUEST, CREATED, OK } = StatusCodes
import { getAllData, setData } from '../firestore/methods'

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
  // const {doc} = req.query
  await setData(req.body.name,req.body)
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
  return res.status(OK).json({
    message: "Get One from List of Item"
  })
}

/**
 * Update Item details
 * 
 * @param req
 * @param res
 * @returns
 */
export const updateItem = async (req: Request, res: Response) => {
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
  return res.status(OK).json({
    message: "Item Deleted Successfully"
  })
}