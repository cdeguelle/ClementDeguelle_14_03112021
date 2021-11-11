import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: []
}

const { actions, reducer } = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (draft, action) => {
            draft.employees.push(action.payload)
            return
        }
    }
})

export const { addEmployee } = actions

export default reducer
