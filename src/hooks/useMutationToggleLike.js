import { useMutation, gql } from '@apollo/client'

const likePhoto = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const useMutationToogleLike = () => {
  const [mutation, { loading: mutationLoading, error: mutationError }] = useMutation(likePhoto)
  return { mutation, mutationLoading, mutationError }
}
