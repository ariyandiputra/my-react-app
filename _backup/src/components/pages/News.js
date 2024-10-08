import React from "react";
import {Tab, Row, Col, Nav, Container} from "react-bootstrap";

import dataNasional from '../../data/news-national.json';
import dataInternasional from '../../data/news-international.json';
import dataKorea from '../../data/news-korea.json';
import dataHiburan from '../../data/news-entertainment.json';
import dataOlahraga from '../../data/news-sports.json';
import dataOtomotif from '../../data/news-otomotif.json';
import dataKesehatan from '../../data/news-health.json';
import dataFinansial from '../../data/news-finance.json';
import dataTeknologi from '../../data/news-techno.json';
import dataPendidikan from '../../data/news-edu.json';

import Newslist from "../News-list";
import * as Icon from "react-bootstrap-icons";

export const News = () => {
    return (
        <div style={{marginLeft:50,marginTop:20}}>
        <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="n01">
            <Row style={{marginBottom:20}}>
                <Col className="col-sm-2">
                <Nav variant="pills" className="flex-column position-fixed">
                    <Nav.Item><Nav.Link eventKey="n01">
                        <div className="d-flex col-sm-12">
                            <div className="col-sm-6">Nasional</div>
                            <div className="col-sm-6"><Icon.ArrowRightShort size={22} className="float-end" style={{display:"none"}}/></div>
                        </div>
                    </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n02">Internasional</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n03">Korea</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n04">Hiburan</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n05">Olahraga</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n06">Otomotif</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n07">Kesehatan</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n08">Finansial</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n09">Teknologi</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link eventKey="n10">Pendidikan</Nav.Link></Nav.Item>
                </Nav>
                </Col>
                <Col className="col-sm-7">
                <Tab.Content>
                    <Tab.Pane eventKey="n01">
                        <Newslist data={dataNasional}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n02">
                        <Newslist data={dataInternasional}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n03">
                        <Newslist data={dataKorea}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n04">
                        <Newslist data={dataHiburan}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n05">
                        <Newslist data={dataOlahraga}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n06">
                        <Newslist data={dataOtomotif}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n07">
                        <Newslist data={dataKesehatan}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n08">
                        <Newslist data={dataFinansial}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n09">
                        <Newslist data={dataTeknologi}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="n10">
                        <Newslist data={dataPendidikan}/>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
                
            </Row>
            </Tab.Container>
            </Container>
        </div>
    );
}
