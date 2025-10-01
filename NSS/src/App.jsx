import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Objectives from './objective';
import Events from './events';
import Activity from './Activity';
import About from './About';
import Team from './Team';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Objectives />
              <Events />
              <Activity />
              <About />
              <Footer />
            </>
          } />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
