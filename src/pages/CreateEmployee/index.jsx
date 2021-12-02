import { StyledLink } from '../../utils/style/Atoms'
import { states } from '../../utils/data/States'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as employeeActions from '../../features/employees'
import close from '../../assets/close.png'
import { DatePicker, StateSelectMenu, DepartmentSelectMenu, Modal } from 'hrnet-components-library/dist/lib'

const Body = styled.div`
    margin-bottom: 50px;
`

const Logo1 = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    display : inline-block;
    height : 0;
    width : 0;
    border-top : 500px solid #657D11;
    border-right : 500px solid transparent;
`

const Logo2 = styled.div`
    position: absolute;
    z-index: -1;
    bottom: 0;
    right: 0;
    display : inline-block;
    height : 0;
    width : 0;
    border-bottom: 500px solid #657D11;
    border-left: 500px solid transparent;
`

const Title = styled.div`
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

const Button = styled.button`
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
            <Logo1 />
            <Logo2 />
            <Title>
                <h1>HRnet</h1>
            </Title>
            <Container>
                <StyledLink to="/employee-list">View Current Employees</StyledLink>
                <h2>Create Employee</h2>
                <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id='first-name' type="text" onChange={(e) => setFirstName(e.target.value)} />

                    
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id='last-name' type="text" onChange={(e) => setLastName(e.target.value)} />

                    <DatePicker id={'date-of-birth'} label={'Date of birth'} setDate={setDateOfBirth} style={{margin: '2rem 0'}} />

                    <DatePicker id={'start-date'} label={'Start date'} setDate={setStartDate} style={{margin: '2rem 0'}} />

                    <Fieldset>
                        <legend>Adress</legend>

                        <Label htmlFor="street">Street</Label>
                        <Input id='street' type="text" onChange={(e) => setStreet(e.target.value)} />

                        <Label htmlFor="city">City</Label>
                        <Input id='city' type="text" onChange={(e) => setCity(e.target.value)} />

                        <StateSelectMenu options={states} onChangeFunction={setState} label={'State'} labelFor={'state'} />

                        <Label htmlFor="zip-code">Zip Code</Label>
                        <Input id='zip-code' type="number" onChange={(e) => setZipCode(e.target.value)} />
                    </Fieldset>

                    <DepartmentSelectMenu options={departments} onChangeFunction={setDepartment} label={'Department'} labelFor={'department'} />
                </div>

                <Button onClick={() => buttonFunctions()}>Save</Button>
            </Container>
            {employeeCreated ? (
                <Modal onClickFunction={() => setEmployeeCreated(false)} contentMessage={'Employee created'} closeIcon={close} />
            ) : null}
            {employeeNotCreated ? (
                <Modal onClickFunction={() => setEmployeeNotCreated(false)} contentMessage={'Employee not created, you have to fill all fields'} closeIcon={close} />
            ) : null}
        </Body>
    )
}

export default CreateEmployee