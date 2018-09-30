import React from 'react'
// import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';
import './ProjectCard.css'
import styled from 'styled-components'


const ProjectCardContainer = styled.div`
    background: red;
    padding: 30px;
    background: url(${props => props.image});
    height: 500px;
    transition: 0.8s;
    color: white;
    &:hover {
        opacity: 0.9;

        h3 {
            opacity: 1;
        }

    }

`

const Title = styled.h3`
    font-size: 72px;
`

const Subtitle = styled.h3`
    transition: 0.3s;
`

const ProjectCard = props => (
    <ProjectCardContainer image={props.image} >
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
    </ProjectCardContainer>
)

export default ProjectCard