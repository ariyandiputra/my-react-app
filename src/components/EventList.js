import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { Modal } from "react-bootstrap";

const EventList = (props) => {
    //const {data} = props;
    //alert (props.value);
    
    const data = (props.value==="all"? props.data : props.data.filter(data => data.eventCategory === props.value));
    //const dataRow = JSON.parse(JSON.stringify(data)).length;

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
                            <img src={item.eventImg} className="rounded portrait-sm w-100" alt="news" onClick={() => toggleShow(item.eventID)}/>
                            <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:30}}>
                                <small>{item.eventTitle} 
                            </small></p>

                            <Modal
                                show={show[item.eventID]}
                                onHide={() => toggleShow(item.eventID)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Header closeButton>
                                <Modal.Title id={item.eventID} className="fw-light fs-6">
                                {'>>>>> ' + item.eventTitle}
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container className="col-sm-12">
                                        <Row>
                                            <Col className="col-sm-7">
                                                <img src={item.eventImg} className="rounded portrait-lg" alt="news"/>
                                            </Col>
                                            <Col className="col-sm-5" style={{backgroundColor:"#1d1d1d", padding:30}}>
                                                <h2>{item.eventTitle}</h2>
                                                <h5>{item.eventDate}</h5>
                                                <p className="fw-light">
                                                {item.eventLocation}
                                                </p>
                                                <hr/>
                                                <p className="fw-light">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                                </p>
                                                
                                                <br/>
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

export default EventList