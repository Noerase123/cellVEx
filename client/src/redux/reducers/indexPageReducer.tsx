import {IAction} from '../interfaces/interfaces'
import { foodList } from '../../server/api/foodServices'
import fs from 'fs'

interface IState {
  value: string
}

const initState: IState = {
  value: 'loading'
} 

export const indexReducer = (state = initState, action: IAction ) => {
  switch (action.type) {
    case "loadAPI":
      return {
        ...state,
        data: state.value
      }
    case "loadSampleAPI":
      return JSON.stringify(fs.readFileSync('../../server/api/sample.json'))
    default:
      return state
  }
}