import React from 'react'
import { useFormUser } from '../../hooks/useFormUser'
import { Form, Input, Logo, Title, Error } from './styles'
import { CatLogo } from '../CatLogo'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const initialState = { email: '', password: '' }
  const [state, onChange] = useFormUser(initialState)
  const { email, password } = state

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
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
      </Form>
    </>
  )
}
