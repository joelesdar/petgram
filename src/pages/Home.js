import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = () => {
  const params = useParams()

  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Encuentra las mejores fotos de tus mascotas'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={params.categoryId} />
    </Layout>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
