import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardDeck } from 'reactstrap';
import ProjectCards from "./ProjectCards"
import AboutMeSideBar from "./AboutMeSideBar"
import { useQuery, gql } from "@apollo/client";


const GITHUB_DATA = gql`
query getGithubData {
    user(login: "calvinfronda") {
      pinnedItems(first: 5, types: [REPOSITORY, GIST]) {
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

  const [githubDataList, setGithubDataList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const { loading, error, data } = useQuery(GITHUB_DATA);


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
    <Container style={{ paddingTop: "5em" }}>
      <Row >
        <AboutMeSideBar />


        <Col >
          <CardDeck >
            {projectData.map((projectData) =>
              <ProjectCards projectData={projectData} isLoaded={isLoaded} />
            )}
          </CardDeck>
        </Col>
      </Row>

    </Container>
  );
}

export default MainContentContainer;