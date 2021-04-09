import { Router } from 'express';
import {getAll, getOne, addItem, updateItem, deleteOneItem} from '../controllers/FoodController'

const router = Router()
const baseRouter = Router()

router.get('/list', getAll)
router.get('/list/:id', getOne)
router.post('/add', addItem)
router.put('/update/:id', updateItem)
router.delete('/delete/:id', deleteOneItem)

baseRouter.use('/food', router)
export default baseRouter