import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import QuoteForm from './components/QuoteForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { useTheme } from './hooks/useTheme';
import { useReveal } from './hooks/useReveal';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Services />
        <Projects />
        <About />
        <WhyChooseUs />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
