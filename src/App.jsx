import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/* import CreateEmployee from './pages/CreateEmployee' */
/* import EmployeeList from './pages/EmployeeList' */
import GlobalStyle from './utils/style/GlobalStyle'

const EmployeeList = React.lazy(() => import('./pages/EmployeeList'))
const CreateEmployee = React.lazy(() => import('./pages/CreateEmployee'))

const App = () => {  
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                <Suspense fallback={<div>Chargement...</div>}>
                        <CreateEmployee />
                    </Suspense>
                </Route>
                <Route path="/employee-list">
                    <Suspense fallback={<div>Chargement...</div>}>
                        <EmployeeList />
                    </Suspense>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
