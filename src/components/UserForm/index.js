import React, { useContext } from 'react'
import { useFormUser } from '../../hooks/useFormUser'
import { Form, Input, Logo, Title, Error, SignMethod } from './styles'
import { CatLogo } from '../CatLogo'
import { SubmitButton } from '../SubmitButton'
import { AppContext } from '../../Context/AppContext'

export const UserForm = ({ onSubmit, title, error, disabled, signMethodText }) => {
  const initialState = { email: '', password: '' }
  const [state, onChange] = useFormUser(initialState)
  const { email, password } = state
  const { toggleLoginState } = useContext(AppContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  const handleClick = (event) => {
    event.preventDefault()
    toggleLoginState()
  }

  return (
    <>
      <Title>{title}</Title>
      <Logo>
        <CatLogo />
      </Logo>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        {error && <Error>{error}</Error>}
        <Input placeholder='Email' name='email' value={email} onChange={onChange} disabled={disabled} />
        <Input placeholder='Password' name='password' type='password' value={password} onChange={onChange} disabled={disabled} />
        <SubmitButton disabled={disabled} text={title} />
        <SignMethod>
          {`${signMethodText} `}
          <a type='button' onClick={handleClick}>Haz click aquí</a>
        </SignMethod>
      </Form>
    </>
  )
}
