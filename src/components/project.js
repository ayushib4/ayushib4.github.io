import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Row, Col } from 'react-bootstrap';
import './project.css';
import '../index.css';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Project(props) {
    return (
        <Card className="projectCard">
            <Row>
                <Col md={4} className="imageContainer">
                    <Card.Img className="cardImage" src={props.imageUrl} alt={props.name} />
                </Col>
                <Col md={8}>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>{props.description}</Card.Text>
                        <Card.Text>{props.awards}</Card.Text>
                        <Card.Text>
                            {props.url ? <FontAwesomeIcon icon={faFileCode} onClick={() => window.open(props.url)} size="xl" style={{ cursor: 'pointer', marginRight: "0.5em" }} /> : null}
                            <FontAwesomeIcon icon={faGithub} onClick={() => window.open(props.faGithub)} size="xl" style={{ cursor: 'pointer' }} />
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}

export default Project;