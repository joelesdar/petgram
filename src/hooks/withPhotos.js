import { gql, useQuery } from '@apollo/client'

export function useGetPhotos (id, categoryId) {
  const withPhotos = gql`
    query getPhotos($categoryId: ID) {
      photos(categoryId: $categoryId) {
        id
        categoryId
        src
        likes
        userId
        liked
      }
    }
  `

  const singlePhoto = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`

  const { loading, error, data } = categoryId > 0 && !id
    ? useQuery(withPhotos, { variables: { categoryId } })
    : categoryId === 0 && !id
      ? useQuery(withPhotos)
      : useQuery(singlePhoto, { variables: { id } })

  return { loading, error, data }
}
