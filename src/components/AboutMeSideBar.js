import React from "react";
import profilePicture from "../calvin.png"


import { Media, Container, Row, Col } from 'reactstrap';

const AboutMeSideBar = () => {
    return (



        <Col sm="3" >

            <img
                alt="..."
                className=" img-fluid rounded-circle shadow"
                src={profilePicture}
                style={{ width: "150px" }}
            ></img>
        </Col>


    );
};

export default AboutMeSideBar;