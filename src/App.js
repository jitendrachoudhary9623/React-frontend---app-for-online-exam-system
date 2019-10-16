import React, { Component } from 'react';
import Quiz from './components/client/Quiz.component'
import AdminApp from './components/admin/AdminApp.component'
class App extends Component {
  state = {
    userType: "admin"
  }

  render() {
    if (this.state.userType === "candidate") {
      return (
        <div>
          <Quiz />
        </div>
      );
    } else {
      return (
        <div>
          <AdminApp />
        </div>
      );
    }
  }
}

export default App;
