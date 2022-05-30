import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CardsNews } from "../../components/CardsNews/CardsNews";
import { getTopHeadlines } from "../../services/getTopHeadlines";

export const CountryNews = (code) => {
  const [data, setData] = useState([]);
  code = useParams();
  const country  = code.code;

  useEffect(() => {
    getTopHeadlines(country).then((data) => {
      setData(data.articles);
    });
  }, [country]);

  return (
    <Container>
    <h1 className='text-center text-black-50 p-5'>News from</h1>
    <CardsNews news={data} />
    </Container>
  );
};
