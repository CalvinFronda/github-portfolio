import React from "react";
import profilePicture from "../calvin.png"


import { Col, Row, Image } from 'react-bootstrap';

const AboutMeSideBar = () => {
    return (

        <Col xs={4} xl={2}>
            <Image
                alt="..."
                roundedCircle
                fluid
                src={profilePicture}
                style={{ width: "300px", height: "300px" }}
            ></Image>
            <Row style={{ paddingTop: "10px" }}>
                <h1>Calvin Fronda</h1>
            </Row>
            <Row>
                <h4>@CalvinFronda</h4>
            </Row>
            <Row>
                My passion for coding began when I became aware of its impacts on society. I intend to continue to learn and apply my skills to move forward in this world.
            </Row>
        </Col>


    );
};

export default AboutMeSideBar;