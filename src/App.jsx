import Hero from './components/Hero';
import Features from './components/Features';
import Journey from './components/Journey';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Features />
      <Journey />
      <CTAFooter />
    </div>
  );
}

export default App;
