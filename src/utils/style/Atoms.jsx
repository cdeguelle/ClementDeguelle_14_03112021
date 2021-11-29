import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #FFF;
    background-color: #657D11;
    border-radius: 5px;
    padding: 10px;
    &:hover {
        text-decoration: underline;
    }
`