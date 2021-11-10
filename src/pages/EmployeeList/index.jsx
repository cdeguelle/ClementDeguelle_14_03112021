import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'

const Body = styled.body`

`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Table = styled.table`

`

function CreateEmployee() {

    return (
        <Body>
            <Container>
                <Title>
                    <h1>Current employees</h1>
                </Title>
                <Table></Table>
                <Link to="/">
                    <StyledLink>Home</StyledLink>
                </Link>
            </Container>
        </Body>
    )
}

export default CreateEmployee