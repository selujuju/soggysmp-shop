import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f4f4f5]">
      <Navigation />
      <Hero />
      <Shop />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
