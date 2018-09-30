import React from 'react'
import { Link } from 'gatsby'
import ProjectCard from "../components/ProjectCard";
import staticdata from "../../staticdata.json"
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'

export default class Index extends React.Component {
  render() {
    return (
      <StaticQuery
      query={graphql`
        query Projects {
          allContentfulProject {
            edges {
              node {
                id
                title
                subtitle
                creative {
                  id
                  file {
                    url
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Layout>
            <div className="Hero">
              <div className="HeroGroup">
                <h2>User Experience & Product Design</h2>
                <p>Selection of projects</p>
                <div className="padding-L" />
                <Link to="/page-2/">Jump in!</Link>
              </div>
            </div>
            <div className="ProjectsGroup">
              {data.allContentfulProject.edges.map((card, index) => (
                console.log(card),
                <ProjectCard key={index}
                  title={card.node.title}
                  subtitle={card.node.subtitle}
                  image={card.node.creative.file.url}
                />
                
              ))}
              </div>
          </Layout>
        </>
      )}
    />
  )
}}