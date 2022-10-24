import { useContext } from 'react'
import { UserContext } from '../../stores/context'
import { Block, Title, Text, Wrap } from './style'

export const Main: React.FC = () => {
  const { firstName, information, contact } = useContext(UserContext)

  return (
    <Wrap>
      <Block>
        <Title>
          <span>First Name:</span>
        </Title>
        <Text>
          <span>{firstName}</span>
        </Text>
      </Block>
      <Block>
        <Title>
          <span>Information:</span>
        </Title>
        <Text>
          <span>{information}</span>
        </Text>
      </Block>
      <Block>
        <Title>
          <span>Contact:</span>
        </Title>
        <Text>
          <span>{contact}</span>
        </Text>
      </Block>
    </Wrap>
  )
}
