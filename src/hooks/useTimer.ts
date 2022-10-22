import { useEffect, useRef } from 'react'
import { store } from '../stores/mobx'

export const useTimer = () => {
  const { state } = store
  const { startTime, started, currentTime } = state
  const interval: any = useRef(0)

  useEffect(() => {
    if (started) {
      interval.current = setInterval(() => {
        store.setState({
          ...state,
          started: true,
          currentTime: Date.now(),
        })
      }, 1000)
    } else {
      clearInterval(interval.current)
    }

    return () => {
      clearInterval(interval.current)
    }
  }, [started, state])

  const startTimer = () => {
    store.setState({
      startTime: Date.now(),
      started: true,
      currentTime: Date.now(),
    })
  }
  const stopTimer = () => {
    store.setState({ ...state, started: false })
  }
  const elapsed = currentTime - startTime

  return {
    startTimer,
    stopTimer,
    elapsed,
    state,
  }
}
