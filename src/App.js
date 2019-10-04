import React from 'react';

import Router1 from "./router/Router";
import NotLoginRouter from "./router/NotLoginRouter";
import {Consumer, Provider} from "./components/Authcontext";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
          <Provider>
            <Consumer>
                {({ isLoggedIn }) => (isLoggedIn ? <Router1/>:<NotLoginRouter/>)}
            </Consumer>
          </Provider>
      </div>
    </div>
  );
}

export default App;
