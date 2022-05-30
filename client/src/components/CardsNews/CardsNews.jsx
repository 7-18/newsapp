import { Card, Col, Container, Row } from "react-bootstrap"
import { BiCaretRight } from "react-icons/bi"
import { Pages } from "../Pagination/Pages"
import moment from "moment"

export const CardsNews = (news) => {
  const { news: newsData } = news
  return (
    <Container className="p-5">
      <Row className="row row-cols-lg-2 g-4">
      {newsData.map((news, index) => {
          const { author, title, description, url, urlToImage, publishedAt } = news
          const formatPublished = moment(publishedAt).locale("es").format('LL')
          const formatHourPublished = moment(publishedAt).locale("es").format('h:mm a')
          return (
            <Col className="col-12 d-flex justify-content-center" key={index}>
            <Card>
              <Card.Img src={urlToImage} height="250px"/>
              <Card.Body>
                <h6>
                  <BiCaretRight /><span className="me-3">{formatPublished}</span>
                  <BiCaretRight /><span>{formatHourPublished}</span>
                </h6>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <a href={url} className="btn btn-secondary" target={"_blank"}>Read more</a>
              </Card.Body>
            </Card>
          </Col>
        )})}
      </Row>
      {newsData.length > 0 && <Pages news={newsData} />}
    </Container>
  )
}