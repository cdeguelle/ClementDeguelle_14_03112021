import { StyledLink } from '../../utils/style/Atoms'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectEmployee } from '../../utils/selectors'
import { useState } from 'react'

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
    width: 100%;
`

const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px;
`

const TableFooter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px;
`

const NoEmployee = styled.td`
    text-align: center;
    padding: 20px;
    background-color: #f9f9f9;
`

function CreateEmployee() {
    const employees = useSelector(selectEmployee).employees
    const [entries, setEntries] = useState(10)

    return (
        <Body>
            <Container>
                <Title>Current employees</Title>
                <TableHeader>
                    <div style={{marginLeft: '30px'}}>
                        <label>{'Show '} 
                            <select onChange={(e) => setEntries(e.target.value)}>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select>
                            {' entries'}
                        </label>
                    </div>
                    <div style={{marginRight: '30px'}}>
                        <label>
                            {'Search: '}
                            <input type='search' />
                        </label>
                    </div>
                </TableHeader>
                <Table role='grid'>
                    <thead>
                        <tr role='row'>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Start Date</th>
                            <th>Department</th>
                            <th>Date of Birth</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zip Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.length === 0 ? (
                            <tr role='row'><NoEmployee colSpan={9} valign={'top'}>No current employee</NoEmployee></tr>
                        ) : (
                            employees.map((employee) => (
                                <tr role='row'>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.startDate}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.dateOfBirth}</td>
                                    <td>{employee.street}</td>
                                    <td>{employee.city}</td>
                                    <td>{employee.state}</td>
                                    <td>{employee.zipCode}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
                <TableFooter>
                    <div role='status' style={{marginLeft: '30px'}}>Showing {entries > employees.length ? employees.length : entries} to {employees.length} entries</div>
                    <div style={{marginRight: '30px'}}>
                        <button data-dt-idx='0' tabindex='-1'>Previous</button>
                        <span>
                            <button data-dt-idx='1' tabindex='0'>1</button>
                        </span>
                        <button data-dt-idx='2' tabindex='-1'>Next</button>
                    </div>
                </TableFooter>
                <StyledLink to="/">Home</StyledLink>
            </Container>
        </Body>
    )
}

export default CreateEmployee