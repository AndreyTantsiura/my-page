import { useContext } from 'react'
import { UserContext } from '../../stores/context'
import { block, main, title, text } from './style'

export const Main: React.FC = () => {
  const { firstName, information, contact } = useContext(UserContext)

  return (
    <div style={main as any}>
      <div style={block as any}>
        <div style={title as any}>
          <span>First Name:</span>
        </div>
        <div style={text as any}>
          <span>{firstName}</span>
        </div>
      </div>
      <div style={block as any}>
        <div style={title as any}>
          <span>Information:</span>
        </div>
        <div style={text as any}>
          <span>{information}</span>
        </div>
      </div>
      <div style={block as any}>
        <div style={title as any}>
          <span>Contact:</span>
        </div>
        <div style={text as any}>
          <span>{contact}</span>
        </div>
      </div>
    </div>
  )
}
