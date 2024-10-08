import { Container, Row, Col, Collapse } from "react-bootstrap";
import dataregion from "../data/news-bekasi.json";
import Cardlist from "./Card-list";
import data from '../data/news-headline.json';
import Newslist from "./News-list";
import Feed from "./Feed";
import Trending from "./Trending";

import * as Icon from 'react-bootstrap-icons';

import React,{ useState} from "react";


const Layout = () => {

    const [open, setOpen] = useState(false);

    function showExpand() {
        document.getElementById('collapseID').style.display = 'block';
        setOpen(!open);
    }

    function closeExpand() {
        document.getElementById('collapseID').style.display = 'none';
        setOpen(!open);
    }

    return (
        <div>
            <Container>
                <Row style={{marginLeft:40, display:"none"}}>
                    <Col className="nav-stick">
                        <ul class="nav nav-pills">
                            <li class="nav-item">
                                <span class="nav-link active">Semua</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link">Korea</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link">Hiburan</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link"># Sepakbola</span>
                            </li>
                            <li class="nav-item">
                                <span class="nav-link"># Gadget</span>
                            </li>
                            
                            <li class="nav-item">
                                <span class="nav-link m-0 p-1"><Icon.Plus size={24}/></span>
                            </li>
                            
                        </ul>
                    </Col>
                </Row>
                <Row style={{marginTop:10,marginLeft:40}}>
                    {/* LEFT CONTENT */}
                    <Col className="col-sm-7" style={{marginTop:10}}>

                        {/* HEADLINE NEWS */}
                        <Row><Trending/></Row>

                        <div style={{marginTop:30,marginBottom:30}}>
                            {/* LATEST NEWS */}
                            <Row className="mb-3"><h5 className="fw-normal">Berita Terbaru</h5></Row>
                            <Newslist data={data}/>
                        </div>

                    </Col>
                    <Col className="col-sm-2 sticky-top h-100 ads" style={{top:90}}>
                        {/* ADVERTISING */}
                        <span style={{position:'absolute', right:0, marginRight:25, marginTop:5, fontSize:12}}><Icon.BadgeAd size={20}/></span>
                        <img src="../images/bg.jpg" className="card-image rounded" alt="news"/>
                        <span 
                        variant="link"
                        onClick={() => showExpand()} 
                        aria-expanded={open} 
                        aria-controls="collapseID"
                        style={{display:'flex',marginTop:-50,padding:10, justifyContent:'center',textAlign:'center',cursor:'pointer'}}>
                            <Icon.BoxArrowInLeft size={24} style={{marginRight:10}}/> Click to Expand
                        </span>

                        <Collapse in={open}> 
                            <div id="collapseID" style={{display:'none'}}> 
                                <span style={{position:'absolute',zIndex:100, right:0, marginRight:25, top:5, fontSize:12}}><Icon.BadgeAd size={20}/></span>
                               <img src="../images/bg.jpg" className="card-image rounded" alt="news"
                               style={{width:1090,position:'absolute',right:12, top:0}}/>
                               <span style={{position:'absolute',display:'flex',zIndex:100,marginTop:-45,padding:10, justifyContent:'center',textAlign:'center',cursor:'pointer'}}
                               onClick={() => closeExpand()} >
                                    Click to Collapse <Icon.BoxArrowInRight size={24} style={{marginLeft:10}}/> 
                                </span>
                            </div> 
                        </Collapse> 

                    </Col>
                    {/* RIGHT CONTENT */}
                    <Col className="col-sm-3 sticky-top h-100" style={{marginTop:10}}>
                        {/* LOCAL NEWS */}
                        <Row className="mb-3"><h6 className="fw-normal">Berita Kota BEKASI</h6></Row>
                        <Row><Cardlist data={dataregion}/></Row>
                        <Row><p style={{marginTop:6}}>Index Berita <Icon.ChevronRight size={10}/></p></Row>

                        <div style={{marginTop:20,marginBottom:40}}>
                            {/* FEEDS */}
                            <Row className="mb-3"><h6 className="fw-normal"><Icon.FileEarmarkPlay size={20} style={{marginRight:10}}/>Kabar Warga <Icon.ChevronRight size={10}/></h6></Row>
                            <Row className="g-1">
                                <div className="col-6 col-sm-6"><Feed /></div>
                                <div className="col-6 col-sm-6"><Feed /></div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
}

export default Layout