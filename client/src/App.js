import React, { Fragment, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./containers/Landing/index";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { loadUser } from "./actions/auth";

import { Sticky } from "semantic-ui-react";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import Routes from "./containers/routing/Routes";
const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Sticky>
            {" "}
            <Navbar />
          </Sticky>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
};

// function mapStateToProps(state) {
//   return { authenticated: state.auth.authenticated };
// }
// export default connect(mapStateToProps, null)(App);
export default App;
