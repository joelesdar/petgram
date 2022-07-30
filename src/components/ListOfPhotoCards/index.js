import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/withPhotos'
import { List } from './styles'

export const ListOfPhotoCards = ({ id, categoryId = 0 }) => {
  const { loading, error, data } = useGetPhotos(id, categoryId)

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error :</p>

  return (
    <List>
      {categoryId >= 0 && !id
        ? data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
        : <PhotoCard key={data.photo.id} {...data.photo} />}
    </List>
  )
}
