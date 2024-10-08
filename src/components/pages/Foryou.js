import { Container, Row, Col } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import dataMovie from "../../data/movie-bekasi.json";
//import GetMovie from "../GetMovie";


export const Foryou = () => {
    return (
        <div>
            <Container>
                <Row style={{marginLeft:26,marginTop:20}}>
                    <Col>
                        <Container>
                        <div className="d-flex col-sm-12">
                            <div className="col-sm-6"><h5>Bioskop hari ini</h5></div>
                            <div className="col-sm-6 text-white-50" style={{paddingRight:20}}><Icon.Arrows size={32} className="float-end"/></div>
                        </div>
                        <Row className="g-2 col-sm-12" style={{marginTop:20,marginBottom:40}}>
                            <div className="scroll-h">
                                {dataMovie && dataMovie.map((item) => {
                                    return (
                                        <img src={item.movieImg} className="rounded movie col-2 col-sm-2" alt="news"/>
                                    );
                                })}
                            </div>
                        </Row>
                        <Row className="g-2 col-sm-12" style={{marginTop:20, marginBottom:20}}>
                            <div className="d-flex col-sm-12">
                                <div className="col-sm-6"><h5>Jangan lewatkan</h5></div>
                                <div className="col-sm-6 text-white-50" style={{paddingRight:20}}><Icon.Arrows size={32} className="float-end"/></div>
                            </div>
                            <Row className="g-2 col-sm-12" style={{marginTop:20}}>
                                <div className="d-flex scroll-h">
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev1.jpg" className="rounded portrait-sm w-100" alt="news"/>
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>Tour Prambanan</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev2.jpg" className="rounded portrait-sm w-100" alt="news" />
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>natas - nitis - netes</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev3.jpg" className="rounded portrait-sm w-100" alt="news" />
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>Art & Fest 2024</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev4.jpg" className="rounded portrait-sm w-100" alt="news" />
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>kroncong plesiran</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev5.jpeg" className="rounded portrait-sm w-100" alt="news" />
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>festival bandung ulin</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev6.jpg" className="rounded portrait-sm w-100" alt="news" />
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>kids day out</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev1.jpeg" className="rounded portrait-sm w-100" alt="news" />
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>festival bandung ulin</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                    <div className="col-sm-2" style={{marginRight:8}}>
                                        <img src="../images/ev2.jpg" className="rounded portrait-sm w-100" alt="news" />
                                        <p className="text-center text-uppercase" style={{marginTop:10,marginBottom:20}}>
                                            <small>kids day out</small>
                                            <h6 className="fw-light text-warning">10 Agustus 2024</h6>
                                        </p>
                                    </div>
                                </div>
                            </Row>
                            
                        </Row>
                        

                        </Container>
                    

                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};
