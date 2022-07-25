import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { UserForm } from '../components/UserForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'
import { useLoginMutation } from '../hooks/useLoginMutation'

export const NotRegisteredUser = () => {
  const { activateLogged } = useContext(AppContext)
  const { registerMutation, loading: loadingRegister, error: errorRegister } = useRegisterMutation()
  const { loginMutation, loading: loadingLogin, error: errorLoading } = useLoginMutation()
  const errorMsg = errorRegister && 'El usuario ya existe o hay algún problema'
  const errorLoginMsg = errorLoading && 'La contraseña no es correcta o el usuario no existe'

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    registerMutation({ variables: variable })
      .then(activateLogged)
  }

  const onSubmitLogin = ({ email, password }) => {
    const input = { email, password }
    const variable = { input }
    loginMutation({ variables: variable })
      .then(activateLogged)
  }

  return (
    <>
      <UserForm onSubmit={onSubmit} error={errorMsg} disabled={loadingRegister} title='Sign In' />
      <UserForm onSubmit={onSubmitLogin} error={errorLoginMsg} disabled={loadingLogin} title='Sign Up' />
    </>
  )
}
