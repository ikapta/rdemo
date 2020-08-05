import { useEffect, useRef } from 'react'

const useInterval = (callback: Function, delay: number | null) => {
  const savedCallback: any = useRef<Function>(callback)

  // 每次都可以执行最新的callback
  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
