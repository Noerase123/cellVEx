import { CREATED } from './actions'
import { IAction } from './interfaces/interfaces'

interface IState {
  create: boolean
}

const initState = {
  create: true,
}

const reducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case CREATED:
      const newLoading = state.create = false
      return {
        ...state,
        data: newLoading
      }
    default:
      return state
  }
}

export default reducer