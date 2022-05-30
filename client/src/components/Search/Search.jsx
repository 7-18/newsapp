import { useEffect, useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { useNews } from '../../hooks/useNews';
import { getNews } from '../../services/getNews'
import { CardsNews } from '../CardsNews/CardsNews';
import { SpinnerComponent } from '../Spinner/Spinner';

export const Search = () => {
  const [keyword, setKeyword] = useState('')
  const { loading, news, setPage } = useNews({ keyword })
  const [data, setData] = useState(news)

  useEffect(() => {
    getNews().then((response) => setData(response.articles));
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const dataFiltered = data.filter((news) => news.title.toLowerCase().includes(keyword.toLowerCase()));
    setData(dataFiltered);
    if (keyword === '') {
      getNews().then((response) => setData(response.articles));
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getNews(keyword).then((response) => setData(response.articles));
    if (keyword === '') {
      getNews().then((response) => setData(response.articles));
    }
  }

  return (
    <>
      <Container>
        <h1 className='text-center text-black-50 p-5'>NewsApp</h1>
        <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="me-2 w-25"
            aria-label="Search"
            onChange={handleChange}
            value={keyword}
          />
          <Button variant="outline-secondary" type='submit'>Search</Button>
        </Form>
      </Container>
      {loading
        ? <SpinnerComponent />
        : <>
          <CardsNews news={data} />
        </>
      }
    </>
  )
}
