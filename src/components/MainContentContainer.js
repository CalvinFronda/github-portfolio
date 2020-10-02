import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardDeck, Tabs, Tab } from 'react-bootstrap';
import ProjectCards from "./ProjectCards"
import AboutMeSideBar from "./AboutMeSideBar"
import { useQuery, gql } from "@apollo/client";


const GITHUB_DATA = gql`
query getGithubData {
    user(login: "calvinfronda") {
      pinnedItems(first: 6, types: [REPOSITORY, GIST]) {
        totalCount
        edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazerCount
              primaryLanguage {
                name
                color
              }
              url
            }
          }
        }
      }
    }
  }
  
  
`

const MainContentContainer = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);

  const { loading, error, data } = useQuery(GITHUB_DATA);

  const [activeTab, setActiveTab] = useState("home");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }


  if (loading) return <p>Loading...</p>;


  if (error) return <p>Error :(</p>;


  let { edges } = data.user.pinnedItems

  let projectData = edges.map(({ node: { description, forkCount, name, primaryLanguage, url, stargazerCount } }) => {
    return {
      name,
      forkCount,
      description,
      primaryLanguage,
      url,
      stargazerCount,
    }
  })





  return (
    <Container className="main-content-container" fluid style={{ paddingLeft: "10em", paddingRight: "10em", paddingTop: "5em" }}>
      <Row>
        <AboutMeSideBar />


        <Col xs="8">

          <Tabs
            id="controlled-tab-example"
            activeKey={activeTab}

            onSelect={(k) => toggle(k)}
          >
            <Tab eventKey="home" title="Home">
              <h3>Pinned</h3>
              <CardDeck >
                {projectData.map((projectData) =>
                  <ProjectCards projectData={projectData} isLoaded={isLoaded} />
                )}
              </CardDeck>
            </Tab>
            <Tab eventKey="about" title="About">
              <h1>Testing </h1>
            </Tab>
            <Tab eventKey="contact" title="Contact" >
              <h1>Another</h1>
            </Tab>
          </Tabs>

        </Col>
      </Row>
    </Container>
  );
}

export default MainContentContainer;