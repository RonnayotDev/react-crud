import './App.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { AddEdit } from './pages/AddEdit';
import { View } from './pages/View';
import { Header } from './components/Header';
import { Notfound } from './pages/Notfound';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/add" component={AddEdit}/>
        <Route path="/update/:id" component={AddEdit}/>
        <Route path="/view/:id" component={View}/>
        <Route component={Notfound}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
