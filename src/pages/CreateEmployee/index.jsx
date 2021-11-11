import { StyledLink } from '../../utils/style/Atoms'
import { states } from '../../utils/data/States'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as employeeActions from '../../features/employees'
import close from '../../assets/close.png'

const Body = styled.body`
    margin-bottom: 50px;
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
    width: 200px;
`

const Fieldset = styled.fieldset`
    margin-top: 10px;
`

const Select = styled.select`
    width: 208px;
    height: 25px;
`

const Button = styled.button`

`

const Confirmation = styled.div`
    vertical-align: middle;
    position: relative;
    z-index: 2;
    max-width: 500px;
    box-sizing: border-box;
    width: 90%;
    background: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px #000;
`

const Blocker = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
    padding: 20px;
    box-sizing: border-box;
    background-color: #000;
    background-color: rgba(0,0,0,0.75);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    & ::before {
        content: "";
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        margin-right: -0.05em;
    }
`

const ConfirmationClose = styled.img`
    position: absolute;
    top: -12.5px;
    right: -12.5px;
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
`

function CreateEmployee() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('AL')
    const [zipCode, setZipCode] = useState('')
    const [department, setDepartment] = useState('Sales')
    const [employeeCreated, setEmployeeCreated] = useState(false)
    const dispatch = useDispatch()

    const employee = {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
        startDate: startDate,
        street: street,
        city: city,
        state: state,
        zipCode: zipCode,
        department: department
    }

    const buttonFunctions = () => {
        dispatch(employeeActions.addEmployee(employee))
        setEmployeeCreated(true)
    }

    return (
        <Body>
            <Title>
                <h1>HRnet</h1>
            </Title>
            <Container>
                <StyledLink to="/employee-list">View Current Employees</StyledLink>
                <h2>Create Employee</h2>
                <Form action='#' >
                    <Label for="first-name">First Name</Label>
                    <Input type="text" onChange={(e) => setFirstName(e.target.value)} />

                    
                    <Label for="last-name">Last Name</Label>
                    <Input type="text" onChange={(e) => setLastName(e.target.value)} />

                    <Label for="date-of-birth">Date of Birth</Label>
                    <Input type="text" onChange={(e) => setDateOfBirth(e.target.value)} />

                    <Label for="start-date">Start Date</Label>
                    <Input type="text" onChange={(e) => setStartDate(e.target.value)} />

                    <Fieldset>
                        <legend>Adress</legend>

                        <Label for="street">Street</Label>
                        <Input type="text" onChange={(e) => setStreet(e.target.value)} />

                        <Label for="city">City</Label>
                        <Input type="text" onChange={(e) => setCity(e.target.value)} />

                        <Label for="state">State</Label>
                        <Select name="state" onChange={(e) => setState(e.target.value)}>
                            {states.map((state) => (
                                <option value={state.abbreviation}>{state.name}</option>
                            ))}
                        </Select>

                        <Label for="zip-code">Zip Code</Label>
                        <Input type="number" onChange={(e) => setZipCode(e.target.value)} />
                    </Fieldset>

                    <Label for="department">Department</Label>
                    <Select name="department" onChange={(e) => setDepartment(e.target.value)}>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </Select>
                </Form>

                <Button onClick={() => buttonFunctions()}>Save</Button>
            </Container>
            {employeeCreated ? (
                <Blocker>
                    <Confirmation>
                        Employee created !
                        <ConfirmationClose src={close} onClick={() => setEmployeeCreated(false)}></ConfirmationClose>
                    </Confirmation>
                </Blocker>
            ) : (
                ''
            )}
        </Body>
    )
}

export default CreateEmployee