import React from 'react'
// import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';
import './ProjectCard.css'
import styled from 'styled-components'

const HeroCardContainer = styled.div`
    background: blue;
    padding: 30px;
    background: url(${props => props.image});
    /* height: 500px; */
    transition: 0.8s;
    color: white;
    &:hover {
        opacity: 0.9;

        h3 {
            opacity: 1;
        }

    }

`

const HeroCard = props => (
    <HeroCardContainer image={props.image} >
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
    </HeroCardContainer>)

export default HeroCard