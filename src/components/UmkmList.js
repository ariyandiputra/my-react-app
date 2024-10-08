import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Modal } from "react-bootstrap";

const UmkmList = (props) => {
    
    const data = (props.value==="all"? props.data : props.data.filter(data => data.ukmCategory === props.value));

    const initialShowState = Object.fromEntries(
        data.map((data) => [data.eventID, false])
    );
    const [show, setShow] = React.useState(initialShowState);
    const toggleShow = (id) =>
        setShow((prev) => {
          return { ...prev, [id]: !prev[id] };
    });
    console.log({ show });

    

    return (
        <>
            
            {data && data.map((item, key) => {

                    return (
                        
                        <div className="col-sm-2" key={key}>
                            <img src={item.ukmImg} className="rounded landscape w-100" alt="news" onClick={() => toggleShow(item.ukmID)}/>
                            <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:30}}>
                                <small>{item.ukmTitle} 
                            </small></p>

                            <Modal
                                show={show[item.ukmID]}
                                onHide={() => toggleShow(item.ukmID)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                <Modal.Title id={item.ukmID} className="fw-light fs-6">
                                {'>>>>> ' + item.ukmTitle}
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container className="col-sm-12">
                                        <Row>
                                            <Col className="col-sm-6">
                                                <img src={item.ukmImg} className="rounded w-100" alt="news"/>
                                            </Col>
                                            <Col className="col-sm-6" style={{backgroundColor:"#1d1d1d", padding:"20 0"}}>
                                                <h2>{item.ukmTitle}</h2>
                                                <p className="fw-light">
                                                {item.ukmDesc}
                                                </p>
                                                <hr/>
                                                <p className="fw-light">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                
                                                <button type="button" class="btn btn-outline-light">Selengkapnya</button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>
                        </div>
                    );
                
            })}
        </>

        
    );
}

export default UmkmList