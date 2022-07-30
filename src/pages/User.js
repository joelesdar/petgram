import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeLogged } = useContext(AppContext)
  return (
    <Layout title='Usuario' subtitle='Cierra Sesión' showTitle showSubtitle>
      <SubmitButton onClick={removeLogged} text='Cerrar Sesión' />
    </Layout>
  )
}
