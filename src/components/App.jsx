import "./App.css";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import { UserProvider } from "../context/UserConext";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import ErrorBoundary from "./base/ErrorBoundary";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <>
      <UserProvider>
        <Layout>
          <Header />
          <Switch>
            <Route path="/sales"></Route>
            <Route path="/reviews">
              <ErrorBoundary>
                <Reviews />
              </ErrorBoundary>
            </Route>
            <Route path="/">
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </Route>
          </Switch>
        </Layout>
      </UserProvider>
    </>
  );
}

export default App;
