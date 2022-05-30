import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CardsNews } from "../components/CardsNews/CardsNews";
import { SpinnerComponent } from "../components/Spinner/Spinner";
import { COUNTRIES } from "../data/countries";
import { getTopHeadlines } from "../services/getTopHeadlines";

export const CountryNews = (code) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  code = useParams();
  const country = code.code;

  const countryName = COUNTRIES.find(arr => arr.code === country).name;

  useEffect(() => {
    setLoading(true);
    getTopHeadlines(country).then((data) => {
      setData(data.articles);
      setLoading(false);
    });
  }, [country]);

  return (
    <Container>
      <h1 className='text-center text-black-50 p-5'>News from {countryName}</h1>
      {loading
        ? <SpinnerComponent />
        : <>
          <CardsNews news={data} />
        </>
      }
    </Container>
  );
};
