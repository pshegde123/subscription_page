import React from 'react';
import SubscribeComponent from './SubscribeComponent';
import SuccessMessage from './SuccessMessage';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

const Router = () => (
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscribeComponent/>}/>
        <Route path="/success/:email" element={<SuccessMessage/>}/>
      </Routes>
    </BrowserRouter>    
  </React.StrictMode>
);
export default Router;

