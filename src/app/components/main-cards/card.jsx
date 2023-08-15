import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { NamesList } from '../../data/99namesofAllah';
// style
import './styles.css'

export const CardMain = (props) => {
    return (
        <>
            {NamesList.map((name, index) => (
                <Col>
                    <Card key={index} className='shadow-sm'>
                        <Card.Subtitle>{name.id}</Card.Subtitle>
                        <Card.Body >
                            <Card.Title>
                                {name.transliteration} - <span className='arabic-name'>{name.arabic}</span>
                            </Card.Title>
                            <Card.Text>
                                {name.meaning}
                            </Card.Text>
                            {/* <p className="card-text">
                                        This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </p> */}
                        </Card.Body>
                        <Card.Footer className='border-top-0'>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    {/* <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                    >
                                        View
                                    </button> */}
                                    {/* <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary"
                                    >
                                        Edit
                                    </button> */}
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-secondary"
                                >
                                    View
                                </button>
                                {/* <small className="text-muted">9 mins</small> */}
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default CardMain;