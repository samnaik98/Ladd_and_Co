import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Industries from './components/Industries';
import Presence from './components/Presence';
import Footer from './components/Footer';



function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Industries />
        <Presence />
      </main>
      <Footer />
    </div>
  );
}

export default App;
