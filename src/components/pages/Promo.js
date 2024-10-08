import React from "react";
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col} from "react-bootstrap";
import dataUmkm from "../../data/umkm-bekasi.json";
import UmkmList from "../UmkmList";

export const Promo = () => {

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
                                        <Nav.Item><Nav.Link eventKey="fashion">Fashion</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="perawatan">Perawatan & kecantikan</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="kuliner">Kuliner</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="kue">Kue & Pastry</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="sembako">Sembako</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="herbal">Herbal</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="frozen">Frozen Food</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="sayur">Sayur & Buah</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="daging">Daging</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="kerajinan">Kerajinan tangan</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="budidaya">Budidaya</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="jasa">Jasa & Layanan</Nav.Link></Nav.Item>
                                        
                                    </Nav>
                                </div>
                            </Col>
                            
                        </Row>
                        <Row className="col-sm-12 g-2" style={{marginTop:80,marginBottom:60}}>
                            <UmkmList data={dataUmkm} value={activeNavbar}/>
                            
                        </Row>
                    </Container>

                    <footer class="footer fixed-bottom bg-dark py-3">
                    <div class="container text-center">
                        <small class="text-white-50">Menampilkan data UMKM yang berada di wilayah <i>Kelurahan Kaliabang Tengah, Bekasi Utara</i></small>
                    </div>
                    </footer>

                    </Col>
                </Row>
                </Container>

        </div>
    );
}
