import { Container, Row, Col } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
                <div className='title'>Wow! Qatar Ingin Bangun Taman Hiburan Mewah Senilai Rp 89 Triliun</div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro