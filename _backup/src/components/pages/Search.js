import {Container, Row, Col} from "react-bootstrap";

export const Search = () => {
  
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  
    return(
      <div style={{marginLeft:40, marginTop:20, height:100+'vh'}}>
            <Container>
                <Row>
                    <Col>
                    <Container>
                      <Row>
                        <Col>
                        <h5>hasil pencarian : {id}</h5>
                        </Col>
                      </Row>
                    </Container>    
                    </Col>
                </Row>
            </Container>
        </div>
    
    );
}
