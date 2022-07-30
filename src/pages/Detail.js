import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const Detail = () => {
  const params = useParams()

  return (
    <Layout title={`Foto ${params.detailId}`}>
      <ListOfPhotoCards id={params.detailId} />
    </Layout>
  )
}
