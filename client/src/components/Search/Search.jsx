import { useEffect, useState } from 'react'
import { Button, Container, Form, FormControl } from 'react-bootstrap'
import { getNews } from '../../services/getNews'
import { CardsNews } from '../CardsNews/CardsNews';

export const Search = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('')
  
  useEffect(() => {
    getNews().then((response) => setData(response.articles));
  }, []);

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataFiltered = data.filter((news) => news.title.toLowerCase().includes(keyword.toLowerCase()));
    setData(dataFiltered);
    if (keyword === '') {
      getNews().then((response) => setData(response.articles));
    }
  }

  const handleSubmit2 = (e) => {
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
      <Form className="d-flex justify-content-center" onSubmit={handleSubmit2}>
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
    <CardsNews news={data} />
    </>
  )
}
