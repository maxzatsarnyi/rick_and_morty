import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/Navbar';
import { GlobalStyle } from './components/globalStyles';

import CharactersPage from './pages/CharactersPage';
import EpisodesPage from './pages/EpisodesPage';
import LocationsPage from './pages/LocationsPage';
import WatchlistPage from './pages/WatchlistPage';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        

          {/* <Route path="/characters/:id" component={CharactersPage} /> */}
          <Route path="/" exact component={CharactersPage} />
          <Route path="/episodes" component={EpisodesPage} />
          <Route path="/locations" component={LocationsPage} />
          <Route path="/watchlist" component={WatchlistPage} />
          {/* <Redirect to="/characters/:id" /> */}
          {/* <Route component={CharactersPage} /> */}
        </Switch>
      </Router>
      
      <GlobalStyle/>
  {/* "homepage": "/characters/:1", */}

    </>
  );
}

export default App;
