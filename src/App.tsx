import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Main from './pages/main/Main';
import Dashboard from './pages/dashboard';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import { IRootState, useAppDispatch } from './store';
import { stat } from 'fs';
import { getProfile } from './store/auth/actionCreators';





function App() {

  const dispatch = useAppDispatch();

  useEffect(() => {
   dispatch(getProfile())
  },[dispatch])
  const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken)
  return <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/dashboard' element={isLoggedIn ? <Dashboard/> : <Navigate to="/"/>}/>
    </Routes>
    </Router>
  
}

export default App;
