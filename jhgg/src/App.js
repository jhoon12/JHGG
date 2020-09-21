import React from "react";
import Main from "./Main";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Style/MainStyle";
import SearchUser from "./SearchUser";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/search/:userName" exact component={SearchUser} />
        <Route
          render={() => {
            return <div>404 Not - Found</div>;
          }}
        />
        {/* path없으면 어디든지 렌더링*/}
      </Switch>
    </div>
  );
}

export default App;
