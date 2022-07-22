import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../../hooks/withPhotos'

export const ListOfPhotoCards = ({ id, categoryId = 0 }) => {
  const { loading, error, data } = useGetPhotos(id, categoryId)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  return (
    <ul>
      {categoryId >= 0 && !id
        ? data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)
        : <PhotoCard key={data.photo.id} {...data.photo} />}
    </ul>
  )
}
