import { Button } from '@mui/material'
import { useTimer } from '../../hooks/useTimer'
import { TimerStyled } from './style'
import { observer } from 'mobx-react-lite'

export const Timer: React.FC = observer(() => {
  const { startTimer, stopTimer, elapsed, state } = useTimer()
  const elapsedViewModel = new Date(elapsed).toLocaleTimeString('en-gb', {
    timeZone: 'UTC',
  })

  return (
    <div>
      <h2>Timer {state.started ? 'on' : 'off'}</h2>
      <TimerStyled>
        <span>{elapsedViewModel}</span>
      </TimerStyled>
      <div>
        <Button
          variant="outlined"
          style={{ color: '#616161', borderColor: '#616161', margin: '1em' }}
          onClick={startTimer}
        >
          Start
        </Button>
        <Button
          variant="outlined"
          style={{ color: '#616161', borderColor: '#616161', margin: '1em' }}
          onClick={stopTimer}
        >
          Stop
        </Button>
      </div>
    </div>
  )
})
