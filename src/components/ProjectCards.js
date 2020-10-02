import React from 'react';
import { Card, Button, Row, Col, } from 'react-bootstrap';

const ProjectCards = (props) => {


    const { description, forkCount, url, name, stargazerCount, primaryLanguage } = props.projectData;

    const truncateDescription = (description) => {
        if (description)
            return description.length > 197 ? description.substring(0, 197) + "..." : description;
    }




    return (
        <Col style={{ paddingBottom: "2vh", paddingTop: "2vh" }} sm="6">
            <Card body >
                <Card.Title><a href={url} style={{ color: "black", }}> {name}</a>  </Card.Title>
                <Card.Text>{truncateDescription(description)}</Card.Text>
                <Card.Text> <span className="dot" style={{ backgroundColor: primaryLanguage.color }}> </span> {primaryLanguage.name}  Forks:{forkCount} Stars:{stargazerCount}</Card.Text>
            </Card>
        </Col >
    );
};

export default ProjectCards;