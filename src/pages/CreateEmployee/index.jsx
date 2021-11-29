import { StyledLink } from '../../utils/style/Atoms'
import { states } from '../../utils/data/States'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as employeeActions from '../../features/employees'
import close from '../../assets/close.png'
import logo from '../../assets/Wealth-health-logo.png'
import { DatePicker, StateSelectMenu, DepartmentSelectMenu, Modal } from 'hrnet-components-library/dist/lib'

const Body = styled.body`
    margin-bottom: 50px;
`

const Logo1 = styled.img`
    position: absolute;
    z-index: -1;
    top: -15%;
    left: -20%;
    height: 600px;
`

const Logo2 = styled.img`
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: -20%;
    height: 600px;
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

const Button = styled.input`
    margin-top: 1rem;
    background-color: #657D11;
    border-radius: 5px;
    color: #FFF;
    padding: 10px;
    width: 150px;
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
    const [employeeNotCreated, setEmployeeNotCreated] = useState(false)
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

    const departments = [
        'Sales',
        'Marketing',
        'Engineering',
        'Human Resources',
        'Legal'
    ]

    const buttonFunctions = () => {
        if (firstName !== '' && lastName !== '' && dateOfBirth !== '' && startDate !== '' && street !== '' && city !== '' && zipCode !== '') {
            dispatch(employeeActions.addEmployee(employee))
            setEmployeeCreated(true)
        } else {
            setEmployeeNotCreated(true)
        }
    }

    return (
        <Body>
            <Logo1 src={logo} alt='Wealth-health logo' />
            <Logo2 src={logo} alt='Wealth-health logo' />
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

                    <DatePicker label={'Date of birth'} setDate={setDateOfBirth} style={{margin: '2rem 0'}} />

                    <DatePicker label={'Start date'} setDate={setStartDate} style={{margin: '2rem 0'}} />

                    <Fieldset>
                        <legend>Adress</legend>

                        <Label for="street">Street</Label>
                        <Input type="text" onChange={(e) => setStreet(e.target.value)} />

                        <Label for="city">City</Label>
                        <Input type="text" onChange={(e) => setCity(e.target.value)} />

                        <StateSelectMenu options={states} onChangeFunction={setState} label={'State'} labelFor={'state'} />

                        <Label for="zip-code">Zip Code</Label>
                        <Input type="number" onChange={(e) => setZipCode(e.target.value)} />
                    </Fieldset>

                    <DepartmentSelectMenu options={departments} onChangeFunction={setDepartment} label={'Department'} labelFor={'department'} />
                </Form>

                <Button type="submit" value="Save" onClick={() => buttonFunctions()} />
            </Container>
            {employeeCreated ? (
                <Modal onClickFunction={() => setEmployeeCreated(false)} contentMessage={'Employee created'} closeIcon={close} />
            ) : null}
            {employeeNotCreated ? (
                <Modal onClickFunction={() => setEmployeeNotCreated(false)} contentMessage={'You have to fill all fields'} closeIcon={close} />
            ) : null}
        </Body>
    )
}

export default CreateEmployee