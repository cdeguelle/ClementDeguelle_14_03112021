import { StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectEmployee } from '../../utils/selectors'
import { DataTable } from 'hrnet-components-library'

const Body = styled.div`
    background-color: #F5F5F5;
    min-height: 100vh;
`

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #657D11;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function CreateEmployee() {
    const employees = useSelector(selectEmployee)
    
    return (
        <Body>
            <Container>
                <Title>Current employees</Title>
                    <DataTable data={employees} paperStyle={{ width: '90%', overflow: 'hidden' }} tableStyle={{ maxHeight: 440 }} rowsPerPageOptions={[10, 25, 100]} />
                <StyledLink style={{marginTop: '20px'}} to="/">Home</StyledLink>
            </Container>
        </Body>
    )
}

export default CreateEmployee