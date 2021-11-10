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

const Form = styled.form`

`

const Label = styled.label`
    display: block;
    margin-top: 1rem;
    margin-bottom: 10px;
`

const Input = styled.input`

`

const Fieldset = styled.fieldset`
    margin-top: 10px;
`

const Select = styled.select`

`

const Button = styled.button`

`

const Confirmation = styled.div`

`

function CreateEmployee() {

    return (
        <Body>
            <Title>
                <h1>HRnet</h1>
            </Title>
            <Container>
                <Link to="/employee-list">
                    <StyledLink>View Current Employees</StyledLink>
                </Link>
                <h2>Create Employee</h2>
                <Form>
                    <Label for="first-name">First Name</Label>
                    <Input type="text" id="first-name" />

                    
                    <Label for="last-name">Last Name</Label>
                    <Input type="text" id="last-name" />

                    <Label for="date-of-birth">Date of Birth</Label>
                    <Input id="date-of-birth" type="text" />

                    <Label for="start-date">Start Date</Label>
                    <Input id="start-date" type="text" />

                    <Fieldset>
                        <legend>Adress</legend>

                        <Label for="street">Street</Label>
                        <Input id="street" type="text" />

                        <Label for="city">City</Label>
                        <Input id="city" type="text" />

                        <Label for="state">State</Label>
                        <Select name="state" id="state"></Select>

                        <Label for="zip-code">Zip Code</Label>
                        <Input id="zip-code" type="number" />
                    </Fieldset>

                    <Label for="department">Department</Label>
                    <Select name="department" id="department">
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </Select>
                </Form>

                <Button /* onClick={() => saveEmployee()} */ >Save</Button>
            </Container>
            <Confirmation>Employee created !</Confirmation>
        </Body>
    )
}

export default CreateEmployee