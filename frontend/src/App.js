import React from 'react';
import './index.css'; // Tailwind CSS styles
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Random } from './pages/Random';
import { RandomOngoing } from './pages/RandomOngoing';
import { IssueComplete } from './pages/IssueComplete';
import { VoteComplete } from './pages/VoteComplete';
import { Vote } from './pages/Vote';
import { AboutUs } from './pages/AboutUs';
import Intro from './pages/Intro/Intro';
import Main from './pages/Main/Main';
import Story from './pages/Story/Story';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/story" element={<Story />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/random" element={<Random />} />
          <Route path="/randomOngoing" element={<RandomOngoing />} />
          <Route path="/Vote" element={<Vote />} />
        </Route>
        <Route path="/issueComplete" element={<IssueComplete />} />
        <Route path="/VoteComplete" element={<VoteComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
