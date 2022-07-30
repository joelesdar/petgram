import React, { createContext, useState } from 'react'
import { useApolloClient } from '@apollo/client'

const AppContext = createContext(null)
const AppProvider = (props) => {
  const [isLogged, setIsLogged] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const client = useApolloClient()

  const activateLogged = (token) => {
    setIsLogged(true)
    window.sessionStorage.setItem('token', token)
  }

  const removeLogged = () => {
    setIsLogged(false)
    window.sessionStorage.removeItem('token')
    client.resetStore()
  }

  return (
    <AppContext.Provider value={{ isLogged, activateLogged, removeLogged }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
