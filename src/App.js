import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQutoes";
import NewQuotes from "./pages/NewQuotes";
import QutoeDetail from "./pages/QuoteDetail";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'> </Redirect>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/quotes/:quoteId'>
          <QutoeDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuotes />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
