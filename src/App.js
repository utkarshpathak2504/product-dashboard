import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Dashboard from './modules/Dashboard';
import Favorite from './modules/Favorite';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="appContainer">

          <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/favorites" element={<Favorite />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
