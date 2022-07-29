
import NavBar from './NavBar';
import Home from './Home';
import BookList from './BookList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BookDetails from './BookDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/books/:id">
              <BookDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
