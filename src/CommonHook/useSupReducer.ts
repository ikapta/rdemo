import { useReducer, useCallback } from "react"

export default function useSupReducer(reducer: any, initialState: any, init: Function) {
  const [state, _dispatch] = useReducer(reducer, initialState) as [any, React.Dispatch<any>]

  const dispatch = useCallback((type: string, value: any) => {
    _dispatch({type, value})
  }, [])

  return [state, dispatch]
}
