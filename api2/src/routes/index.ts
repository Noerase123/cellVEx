import { Router } from 'express';
import {getAll, getOne, addItem, updateItem, deleteOneItem, searchOne, orderByData} from '../controllers/FoodController'

const router = Router()
const baseRouter = Router()

//routers for food
router.get('/list', getAll)
router.get('/list/:id', getOne)
router.get('/list', orderByData)
router.get('/search/:prop', searchOne)
router.post('/add', addItem)
router.put('/update/:id', updateItem)
router.delete('/delete/:id', deleteOneItem)

baseRouter.use('/food', router)
export default baseRouter