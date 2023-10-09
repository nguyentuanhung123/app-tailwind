import './App.css';
import Example from './components/Example/Example';
import Example2 from './components/Example/Example2';
import Finally from './components/Finally/Finally';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import Travel from './components/Travel/Travel';

function App() {
  return (
    <>
      <div className="container min-h-screen bg-[url('./images/image.png')] bg-center bg-cover px-28 py-5 relative">
        <Nav />
        <Hero />
      </div>
      <Travel />
      <Example />
      <Example2 />
      <Footer />
      <Finally />
    </>
  );
}

export default App;
