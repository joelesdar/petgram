import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { UserForm } from '../components/UserForm'

export const NotRegisteredUser = () => {
  const { activateLogged } = useContext(AppContext)

  return (
    <>
      <UserForm title='Sign In' onSubmit={activateLogged} />
      <UserForm title='Log In' onSubmit={activateLogged} />
    </>
  )
}
