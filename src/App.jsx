import { React } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import EmployeeList from './pages/EmployeeList'
import GlobalStyle from './utils/style/GlobalStyle'

const App = () => {  
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path="/">
                    <CreateEmployee />
                </Route>
                <Route path="/employee-list">
                    <EmployeeList />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
