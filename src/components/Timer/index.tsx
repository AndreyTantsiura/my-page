import { Button } from '@mui/material'
import { useTimer } from '../../hooks/useTimer'
import { btn, timer } from './style'
import { observer } from 'mobx-react-lite'

export const Timer: React.FC = observer(() => {
  const { startTimer, stopTimer, elapsed, state } = useTimer()
  const elapsedViewModel = new Date(elapsed).toLocaleTimeString('en-gb', {
    timeZone: 'UTC',
  })

  return (
    <div>
      <h2>Timer {state.started ? 'on' : 'off'}</h2>
      <div style={timer}>
        <span>{elapsedViewModel}</span>
      </div>
      <div>
        <Button variant="outlined" style={btn} onClick={startTimer}>
          Start
        </Button>
        <Button variant="outlined" style={btn} onClick={stopTimer}>
          Stop
        </Button>
      </div>
    </div>
  )
})
