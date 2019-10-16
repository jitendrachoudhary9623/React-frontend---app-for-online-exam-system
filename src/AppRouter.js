import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import AdminApp from './components/admin/AdminApp.component'
import Quiz from './components/client/Quiz.component'
import ViewQuestions from './components/admin/ViewQuestions.component'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddQuestion from './components/admin/AddQuestion.component';
import LoginForm from './components/LoginForm.component'
import { Redirect } from "react-router"
import DeleteQuestion from "./components/admin/DeleteQuestion.component"
import CreateQuestionPaper from "./components/admin/CreateTest/CreateQuestionPaper.component"
import UpdateQuestion from "./components/admin/UpdateQuestion.component"
import AssignTest from "./components/admin/AssignTest/AssignTest.component"
class AppRouter extends Component {
state={
    authentication:false,
    userType:""
}
constructor(props){
    super(props);
}
   
    render() {
        return (
            <Router>
                <div>
                    {/* Need to add authentication for each route except login */}
                    <Route exact path="/" component={LoginForm}
                       // render={(props) => <LoginForm {...props} onSignIn={this.onSignIn.bind(this)} />}
                    />
                    <Route path="/test" component={Quiz} />
                    <Route path="/Admin" component={AdminApp} />
                    <Route path="/ViewQuestions" component={DeleteQuestion} />
                    <Route path="/AddQuestion" component={AddQuestion} />
                    <Route path="/CreateQuestion" component={CreateQuestionPaper} />
                    <Route path="/updateQuestion" component={UpdateQuestion}/>
                    <Route exact path="/AssignTest" component={AssignTest}/>

                </div>
            </Router>
        )
    }
}

export default AppRouter;