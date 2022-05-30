import React from 'react'
import { CardsNews } from '../../components/CardsNews/CardsNews'

export const SearchResults = ({ params }) => {
  const { keyword } = params
  const { loading, news } = useNews( { keyword } )
  return <>
  {loading
  ? <Spinner />
  : <>
    <CardsNews news={news} />
    </>
}
  </>
}