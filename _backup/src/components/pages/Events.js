import React from "react";
import Nav from 'react-bootstrap/Nav';
import {Container, Row, Col} from "react-bootstrap";
import dataEvent from "../../data/event-bekasi.json";
import EventList from "../EventList";

export const Events = () => {  
    
    //const [eventFilter, setEventFilter] = React.useState();
    const [activeNavbar, setActiveNavbar] = React.useState("all");

    const handleSelect = (eventKey) => {
        //alert(`selected : ${eventKey}`);
        setActiveNavbar(eventKey);
        //setEventFilter(value);
        //alert(activeNavbar);
    };

    //filter
    /*const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);


    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        filterData(value);
    };


    const filterData = (searchTerm) => {
        const filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filteredData);
    };*/
    //==== end filter

    return (
        <div style={{marginLeft:40,minHeight:"100vh"}}>
            <Container>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col className="nav-stick">
                                    <Nav variant="pills" activeKey={(activeNavbar)} onSelect={handleSelect}>
                                        <Nav.Item><Nav.Link eventKey="all">Semua</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="festival">Festival</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="carnaval">Carnaval</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="art">Pertunjukan Seni</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="concert">Konser Musik</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="competition">Perlombaan</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="exhibition">Pameran</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="seminar">Seminar</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="social">Kegiatan Sosial</Nav.Link></Nav.Item>
                                        <Nav.Item><Nav.Link eventKey="promo">Promo</Nav.Link></Nav.Item>
                                    </Nav>
                                </Col>
                            </Row>
                        
                        <Row className="col-sm-12 g-2" style={{marginTop:80}}>
                            <EventList data={dataEvent} value={activeNavbar}/>
                            
                        </Row>
                    </Container>
                    </Col>
                </Row>
            </Container>

            

        </div>
    );
}
