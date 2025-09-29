import Hero from './Hero';
import Objectives from './objective';
import Events from './events';
import Activity from './Activity';
import About from './About';
import Team from './Team';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Objectives />
      <Events />
      <Activity />
      <Team />
      <About />
      <Footer />
    </div>
  );
};

export default App;
