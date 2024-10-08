import {Navbar, Container, Nav} from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';
import { Offcanvas } from "react-bootstrap";
import {Link} from "react-router-dom";

import { useState } from "react";

const NavigationBar = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
        <Navbar className="fixed-top">
            <Container>
                <Nav>
                    <Nav.Link  className="d-flex align-item-center justify-content-center">
                        <div className="align-self-center text-center" style={{width:40+'px'}}>
                            <button type="button" class="btn btn-secondary btn-dark position-relative rounded-circle" onClick={handleShow}>
                                <Icon.List style={{height:30,width:20}}/>
                            </button>
                        </div>
                    </Nav.Link>
                    <Nav.Link><Link to='/'><h1 style={{marginLeft:10,marginRight:10+'px'}}>K</h1></Link></Nav.Link>
                    <Navbar.Brand>
                        <Nav style={{fontSize:1+'em', marginTop:5+'px'}}><span className="fw-normal">KabarKabarin</span></Nav>
                        <Nav style={{fontSize:0.6+'em', marginTop:-3+'px'}}><span>WARGA BEKASI</span></Nav>
                    </Navbar.Brand>
                </Nav>
                <Nav style={{width:600}}>
                    <div className="gcse-search" style={{display:"none"}}></div>

                    <form action="https://www.google.com/search?tbm=nws" target="_blank">
                        <div className="input-group" style={{width:600}}>
                            <input name="q" className="form-control bg-transparent border-1 rounded-pill rounded-end-3 shadow-none fw-normal" type="search" defaultValue="Cari kabar apa?" id="search-input" style={{ color:'#fff', borderColor:'#444', fontSize:15}}/>
                            <span className="input-group-append" >
                                <button type="submit" class="btn btn-dark d-flex p-2 align-items-center justify-content-center position-relative border-1 rounded-pill rounded-start-3" style={{width:60, backgroundColor:'#444', borderColor:'#444'}}>
                                    <Icon.Search style={{height:20,width:20}}/>
                                </button>
                            </span>
                        </div>
                    </form>
                </Nav>
                <Nav>
                    <Nav.Link style={{marginTop:4, marginRight:6}}>
                        <button type="button" class="btn btn-secondary position-relative btn-dark" style={{color:'white',background:"none"}}>
                            <Link to='/events'>Event</Link>
                            <span class="position-absolute top-10 start-100 translate-middle p-1 bg-danger rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                    </Nav.Link>
                    <Nav.Link style={{marginTop:4, marginRight:6}}>
                        <button type="button" class="btn btn-secondary position-relative btn-dark" style={{color:'white',background:"none"}}>
                            <Link to='/promo'>Umkm</Link>
                            <span class="position-absolute top-10 start-100 translate-middle p-1 bg-danger rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                    </Nav.Link>
                    <Nav.Link style={{marginTop:4}}>
                        <button type="button" class="btn btn-secondary position-relative btn-dark" style={{color:'white',background:"none"}}>
                            <Link className="alink" to='/community'>Komunitas</Link>
                            <span class="position-absolute top-10 start-100 translate-middle p-1 bg-danger rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                    </Nav.Link>
                    <Nav.Link style={{marginLeft:20+'px'}}>
                        <button type="button" class="btn btn-secondary btn-dark position-relative rounded-circle">
                            <Icon.Upload style={{height:30,width:20}}/>
                        </button>
                    </Nav.Link>
                    <Nav.Link>
                        <button type="button" class="btn btn-secondary btn-dark position-relative rounded-circle">
                            <Icon.Bell style={{height:30,width:20}}/>
                        </button>
                    </Nav.Link>
                    <Nav.Link>
                        <button type="button" class="btn btn-secondary btn-dark position-relative rounded-circle">
                            <Icon.PersonFill style={{height:30,width:20}}/>
                        </button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Offcanvas show={show} onHide={handleClose} className='text-bg-dark'>
            <Offcanvas.Header closeButton closeVariant="white">
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>

        </>
    );
}

export default NavigationBar