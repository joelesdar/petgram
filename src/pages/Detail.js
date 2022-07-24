import React from 'react'
import { useParams } from 'react-router-dom'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

export const Detail = () => {
  const params = useParams()

  return (
    <ListOfPhotoCards id={params.detailId} />
  )
}
