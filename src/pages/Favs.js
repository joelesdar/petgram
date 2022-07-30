import React from 'react'
import { ListOfFavs } from '../components/ListOfFavs'
import { useGetFavorites } from '../hooks/useGetFavorites'
import { Layout } from '../components/Layout'

export const Favs = () => {
  const { data, loading, error } = useGetFavorites()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  return (
    <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos' showTitle showSubtitle>
      <ListOfFavs favs={data.favs} />
    </Layout>
  )
}
