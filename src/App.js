import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="container min-h-screen bg-[url('./images/image.png')] bg-center bg-cover px-28 py-5 relative">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
