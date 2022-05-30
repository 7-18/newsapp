import { useEffect, useState } from "react"
import { getNews } from "../services/getNews"

const INITIAL_PAGE = 0
export function useNews({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [news, setNews] = useState([])
  const [page, setPage] = useState(INITIAL_PAGE)
  
  const keywordToUse = keyword || localStorage.getItem("lastSearch") || 'random'

  useEffect(() => {
    setLoading(true)


    getNews({ keyword: keywordToUse })
      .then(news => {
        setNews(news.articles)
        setLoading(false)

        localStorage.setItem("lastSearch", keyword)
      })
  }, [keyword, keywordToUse, setNews])
  

  useEffect(function() {
    if (page === INITIAL_PAGE) return
    setLoadingNextPage(true)
    getNews({ keyword: keywordToUse, page })
      .then(nextNews => {
        setNews(prevNews => prevNews.concat(nextNews))
        setLoadingNextPage(false)
      })
  }, [keywordToUse, page, setNews])
  

 return { loading, loadingNextPage, news, setPage }

}