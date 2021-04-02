import { Card, Container, Header } from "semantic-ui-react";
import styled from 'styled-components'
import mediaQueries from "../styles/breakpoints";

const FlexContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    
    div {
        height: 400px;
    }
    ${mediaQueries.phablet`
        flex-direction: column;
        height: 20vh;
    `}
`

export default function Footer(){
    return (
        <Container fluid style={{borderTop: `1px solid rgb(34 36 38 / 15%)`}}>
            <Container text style={{paddingTop: '4rem'}}>
                <FlexContainer>
                    <div>
                        <Header as="h3">About</Header>
                        <a href="#">Privacy</a>
                        <br></br>
                        <a href="#">Terms</a>
                    </div>
                    <div>
                        <Header as="h3">Services</Header>
                        <a href="#">Our Products</a>
                    </div>
                    <div>
                        <Header as="h3">Water My Plants</Header>
                        <p>Extra space for a call to action inside <br></br>the footer that could help re-engage users.</p>
                    </div>
                </FlexContainer>
            </Container>
        </Container>
    )
}