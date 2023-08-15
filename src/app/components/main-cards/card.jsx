import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { NamesList } from '../../data/99namesofAllah';

export const CardMain = (props) => {

    return (
        <>
            <Row className='g-md-3 g-2 justify-content-center'>
                {
                    NamesList.map((name, index) => (
                        <Col xs="auto" key={index}>
                            <Card>
                                <Card.Subtitle>{name.id} </Card.Subtitle>
                                <Card.Body>
                                    <Card.Title>
                                        {name.transliteration} - {name.arabic}
                                    </Card.Title>
                                    <Card.Text>
                                        {name.meaning}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row >
        </>
    )
}

export default CardMain;