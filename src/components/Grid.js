import { Container, Row, Col } from "react-bootstrap";

const Grid = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <ul class="nav kanal-list">
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm active">SEMUA</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">KOREA</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">HIBURAN</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">OLAHRAGA</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">OTOMOTIF</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">KESEHATAN</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">FINANSIAL</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">TEKNOLOGI</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btn-secondary btn-sm">PENDIDIKAN</button>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row> 
                <Col className="col-md-7">
                    <div className="card text-bg-dark">
                        <img src="https://akcdn.detik.net.id/community/media/visual/2024/07/08/royal-enfield-classic-500-cc_169.jpeg?w=700&q=90" className="card-image" alt="news"/>
                        <div className="card-img-overlay">
                            <h3 className="card-title">Bea Cukai Lelang 60 Moge Royal Enfield, Mulai Rp 30 Jutaan</h3>
                            <span className="card-text"><small>OTOMOTIF</small></span>
                        </div>
                    </div>
                </Col>
                <Col className="col-md-2 border">Advertise Here</Col>
                <Col className="col-md-3">
                    <h6 style={{marginBottom:20+'px', fontWeight:300}}>BERITA POPULER</h6>
                    <ul className="list-group playlist">
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div className="d-flex w-100 justify-content-between">
                                <img src="./images/idol-kpop.jpg" className="thumbnail rounded" alt="news"/> 
                                <div className="mb-1">
                                    <small>Small girl feat. 도경수 (D.O.) <br /> 이영지</small>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Grid