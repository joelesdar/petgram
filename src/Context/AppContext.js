import React, { createContext, useState } from 'react'

const AppContext = createContext(null)
const AppProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false)

  const activateLogged = () => setIsLogged(true)

  return (
    <AppContext.Provider value={{ isLogged, activateLogged }}>
      {props.children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
