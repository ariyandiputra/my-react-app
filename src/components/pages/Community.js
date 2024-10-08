import React from "react";
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col} from "react-bootstrap";
import dataCommunity from "../../data/community-bekasi.json";
import CommunityList from "../CommunityList";

export const Community = () => {

    const [activeNavbar, setActiveNavbar] = React.useState("all");

    const handleSelect = (eventKey) => {
        setActiveNavbar(eventKey);
    };

    return (
        <div style={{marginLeft:40,minHeight:"100vh"}}>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col className="nav-stick">
                                    <div className="scroll-h" style={{marginRight:100}}>
                                        <Nav variant="pills" activeKey={(activeNavbar)} onSelect={handleSelect} style={{flexWrap:"nowrap"}}>
                                            <Nav.Item><Nav.Link eventKey="all">Semua</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="mycommunity">Komunitas saya</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="sport">Olahraga</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="otomotif">Otomotif</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="art">Seni & Budaya</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="hobby">Hobi & Permainan</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="animal">Hewan Peliharaan</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="social">Sosial & Lingkungan</Nav.Link></Nav.Item>
                                            <Nav.Item><Nav.Link eventKey="religion">Keagamaan</Nav.Link></Nav.Item>
                                            
                                        </Nav>
                                    </div>
                                
                                </Col>
                        </Row>
                        <Row className="col-sm-12 g-2" style={{marginTop:80,marginBottom:60}}>
                            <CommunityList data={dataCommunity} value={activeNavbar}/>
                            
                        </Row>
                    </Container>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
