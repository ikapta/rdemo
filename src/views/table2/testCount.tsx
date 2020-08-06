import React, { useState, useEffect, useRef } from 'react';
import useInterval from '../../CommonHook/useInterval';
import { Button } from 'antd';

// 在组件中使用interval
function Counter() {
  let [count, setCount] = useState(0)
  const savedCallback: any = useRef();

  // 确保每次set之后重新render可以读到最新的count
  function callback() {
    setCount(count + 1);
  }

  // 每次都可以执行最新的callback
  useEffect(() => {
    savedCallback.current = callback;
  });

  // 只执行一次，保存了setInterval id
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <h1>{count}</h1>
}

// 抽象interval方法
function AbstractIntervalCounter() {
  let [count, setCount] = useState(0)
  let [delay, setDelay] = useState<number | null>(1000)

  useInterval(() => {
    setCount(count + 1)
  }, delay)

  function toggleDelay() {
    console.log(delay)
    delay ? setDelay(null) : setDelay(1000)
  }

  return (
    <>
    <h1>{count}</h1>
    <Button onClick={() => toggleDelay()} >{delay ? 'stop' : 'start'}</Button>
    </>
  )
}

export const AbCounter = AbstractIntervalCounter
export default Counter
