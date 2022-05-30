import { Container, Spinner } from "react-bootstrap"

export const SpinnerComponent = () => {
  return (
    <Container className="d-flex justify-content-center">
       <Spinner animation="border" variant="secondary" />
    </Container>
  )
}