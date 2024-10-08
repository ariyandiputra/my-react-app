import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShortContainer from '../ShortContainer';

export class Feeds extends Component {
    render() {
        return (
            <div style={{marginLeft:40}}>
                <Container className='d-flex justify-content-center'>
                    <Row>
                        <Col className='col-sm-12'>
                            <ShortContainer />
                        </Col>
                    </Row>
                </Container>
            </div>
            
        );
    }   
}

