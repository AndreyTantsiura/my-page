import { createContext } from 'react'
import data from '../data.json'

type UserProps = {
  firstName: string
  information: string
  contact: string
}

const defaultUserData: UserProps = data
export const UserContext = createContext(defaultUserData)

export const UserProvider = (props: any) => {
  return (
    <UserContext.Provider value={defaultUserData}>
      {props.children}
    </UserContext.Provider>
  )
}
