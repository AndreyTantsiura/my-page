import { makeAutoObservable } from 'mobx'

class Timer {
  state = {
    startTime: 0,
    started: false,
    currentTime: 0,
  }

  constructor() {
    makeAutoObservable(this)
  }

  setState(prevState: {
    startTime: number
    started: boolean
    currentTime: number
  }) {
    this.state = prevState
  }
}

export const store = new Timer()
