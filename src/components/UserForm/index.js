import React from 'react'
import { useFormUser } from '../../hooks/useFormUser'
import { Form, Input, Button, Logo, Title } from './styles'
import { CatLogo } from '../CatLogo'

export const UserForm = ({ onSubmit, title }) => {
  const initialState = { email: '', password: '' }
  const [state, onChange] = useFormUser(initialState)
  const { email, password } = state

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Logo>
          <CatLogo />
        </Logo>
        <Input name='email' placeholder='Email' type='email' value={email} onChange={onChange} />
        <Input name='password' placeholder='Password' type='password' value={password} onChange={onChange} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
