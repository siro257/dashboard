import "./App.css";
import Layout from "./layout/Layout";
import Header from "./layout/Header";
import { UserProvider } from "../context/UserConext";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import Sales from "./pages/Sales";
import ErrorBoundary from "./base/ErrorBoundary";

function App() {
  return (
    <>
      <UserProvider>
        <Layout>
          <Header />
          <Switch>
            <Route path="/sales">
              <ErrorBoundary>
                <Sales />
              </ErrorBoundary>
            </Route>
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
