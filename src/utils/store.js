import employeeReducer from '../features/employees'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
    reducer: {
      employee: employeeReducer
    }
})