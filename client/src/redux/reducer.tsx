import { UPDATED } from './actions'

interface IState {
  updated: number
}

interface IAction {
  type: string
}

const initState = {
  updated: 0
}

export const reducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case UPDATED:
      return {
        ...state,
        response: state.updated + 1
      }
    default:
      return state
  }
}