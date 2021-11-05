import './App.css';
import MyNavBar from './components/MyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MyBackOffice from './components/myBackOffice';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router> 
        <MyNavBar/>
        <Route path="/office" exact component={MyBackOffice}></Route>
        <Route path="/home" exact component={Home}></Route>
      </Router>

    </div>
  );
}

export default App;
