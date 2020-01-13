import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateQuestion from './components/Questions/CreateQuestion'
import QuesAns from './components/Questions/QuestionAnswer'
import CreatAns from './components/Answers/CreateAns'
import MyAns from './components/Answers/MyAns'
import MyQues from './components/Questions/MyQues'

class App extends Component{
  
  render(){
    return(
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route  exact path='/' component={Dashboard}/>
          <Route  path='/signup' component={SignUp}/>
          <Route  path='/signin' component={SignIn}/>
          <Route  path='/askques' component={CreateQuestion}/>
          <Route path='/myquestions' component={MyQues}/>
          <Route path='/myanswers' component={MyAns}/> \
          <Route path='/quesans/:id' component={QuesAns}/>
          <Route path='/answer/:id' component={CreatAns}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
