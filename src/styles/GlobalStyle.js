import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body: ${props => props.theme.colors.primary};
`