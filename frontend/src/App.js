import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { fetchData } from './state/api/perios.api';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import Main from './pages/Main';
import PeriodView from './pages/PeriodView';
import Intro from './pages/Intro';

import './App.css';

axios.defaults.baseURL = 'http://localhost:4000/';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/home" element={<Main />}></Route>
        <Route path="/home/:period_title" element={<PeriodView />}></Route>
      </Routes>
    </div>
  );
}

export default App;
