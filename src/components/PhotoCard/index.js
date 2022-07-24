import React from 'react'
import { Article, ImgWrapper, Img } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { LikedButton } from '../LikeButton'
import { useMutationToogleLike } from '../../hooks/useMutationToggleLike'
import { Link } from 'react-router-dom'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const { mutation } = useMutationToogleLike()
  const [show, element] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const handleLikedClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <Article ref={element}>
      {
        show &&
        // eslint-disable-next-line react/jsx-indent
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <LikedButton liked={liked} likes={likes} onClick={handleLikedClick} />
        </>
      }
    </Article>
  )
}
