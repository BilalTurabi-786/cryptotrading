
import Index from './Client/pages/Index';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Auth from './Client/pages/Auth/Auth';

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
            <Route exact path="/"> <Index></Index> </Route>
            <Route exact path="/login" component={Auth}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
