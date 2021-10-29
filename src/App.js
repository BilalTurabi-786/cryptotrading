
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Auth from './Client/pages/Auth/Auth';
import Index from './Client/pages/Index';

function App() {
  return (
    
      <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/" component={Index}/> 
        </Switch>
      </BrowserRouter>
  );
}

export default App;
