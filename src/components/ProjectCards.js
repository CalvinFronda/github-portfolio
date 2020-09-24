import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap';

const ProjectCards = (props) => {


    const { description, forkCount, url, name, stargazerCount, primaryLanguage } = props.projectData;

    const truncateDescription = (description) => {
        if (description)
            return description.length > 197 ? description.substring(0, 197) + "..." : description;

    }


    return (
        <Col style={{ paddingBottom: "2vh" }} sm="6">
            <Card body >
                <CardTitle>{name}</CardTitle>
                <CardText>{truncateDescription(description)}</CardText>
                <CardText>Forks:{forkCount} Stars:{stargazerCount}</CardText>
            </Card>
        </Col>



    );
};

export default ProjectCards;