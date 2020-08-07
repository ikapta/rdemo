import { useReducer, useCallback } from "react"

export default function useSupReducer(reducer: any, initialState: any, init: any) {
  console.count('entry_sup')
  const [state, _dispatch] = useReducer(reducer, initialState, init) as [any, React.Dispatch<any>]

  const dispatch = useCallback((action) => {
    _dispatch(action)
  }, [])

  return [state, dispatch]
}
